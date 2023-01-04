import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import requests from "../requests/requests";

import {
  addReview,
} from '../features/reviews';
import produce from "immer";

// --------------------------- Action ---------------------------

export const loadUsers = createAsyncThunk(
  'users/load',
  () => {
    return requests.loadUsers()
  }
);

// --------------------------- Reducer ---------------------------

const initState = {
  entities: {},
  error: null
}

const { reducer } = createSlice({
  name: 'reviews',
  initialState: initState,
  extraReducers: {
    [loadUsers.pending.type]: (state) => {
      return {
        ...state,
        error: null,
      }
    },
    [loadUsers.fulfilled.type]: (state, action) => {
      const result = produce(state, draft => {
        const entities = action.payload.reduce((acc, user) => (
          {
            ...acc,
            [user.id]: user
          }
        ), {});
        Object.assign(draft.entities, entities);
      });

      // МБ Придется статусы добавлять!
      return {
        ...result
      }
    },
    [loadUsers.rejected.type]: (state, action) => {
      console.log(action);
      return {
        ...state,
        error: null
      }
    },
    'reviews/add': (state, action) => { //FIXME Вместо addReview импортирования используем константу!
      const { review } = action.payload;
      const { userId } = action.meta;
      
      Object.assign(state.entities, { [userId]: { id: userId, name: review.name } })
    }
  }
});

export default reducer;


// --------------------------- Selectors ---------------------------
const usersMap = state => state.users.entities;

export const userByIdSelector = (state, { id }) => {
  const user = usersMap(state)[id];

  return user;
}