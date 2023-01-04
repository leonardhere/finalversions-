import requests from '../requests/requests';
import { userByIdSelector } from './users';
import { push } from 'connected-react-router';

import {
  createAction,
  createAsyncThunk,
  createSlice,
  createEntityAdapter
} from '@reduxjs/toolkit';

import {
  STATUS
} from '../constants/constants';

export const ADD_REVIEW = 'ADD_REVIEW';
export const FETCH_REVIEWS = 'FETCH_REVIEWS';

// ------------------------------- Actions -------------------------------

export const addReview = createAction(
  'reviews/add', // Название action-a
  (review, props) => ( // Функция
    {
      type: ADD_REVIEW, //FIXME Можно убрать!
      payload: { // Данные
        review,
        restaurantId: props.restaurantId,
      },
      meta: { // Служебные данные
        generateId: ['reviewId', 'userId']
      }
    }
  )
);

export const loadReviews = createAsyncThunk(
  'reviews/load',
  (restaurantId, { dispatch }) => {
    return requests.loadReviews(restaurantId).catch(error => {
      dispatch(push('/error'));
      throw error; //! Обязательно нужно выкидывать ошибку! Чтобы промис зареджектился
    });
  }
);

// ------------------------------- Reducer -------------------------------
// Это сущность, которая в себе содержит объект с методами для работы с коллекциями
const Reviews = createEntityAdapter();

const initialState = {
  ...Reviews.getInitialState(),
  status: STATUS.empty,
  error: null
}

const { reducer } = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    // An object of "case reducers". Key names will be used to generate actions.
    //reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>

    // Как я понял, тут мы и свои экшены формируем и редьюсеры, 
    // которые будут выполняться при этих экшенах!
  },
  extraReducers: {
    // Т.к. экшены уже есть, 
    // нужно к ним просто редьюсеры(реакции на экшн!) привязать!
    [loadReviews.pending.type]: (state, action) => {
      return {
        ...state,
        status: STATUS.loading,
        error: null
      }
    },
    [loadReviews.fulfilled.type]: (state, action) => {
      const { payload } = action;

      const entities = payload.reduce((acc, review) => (
        {
          ...acc,
          [review.id]: review
        }
      ), {});

      state.status = STATUS.loaded;
      Reviews.addMany(state, entities);
    },
    [loadReviews.rejected.type]: (state, action) => {

      const { error } = action;

      return {
        ...state,
        status: STATUS.error,
        error: error
      }
    },
    [addReview.type]: (state, action) => {

      const { review } = action.payload;
      const { reviewId, userId } = action.meta;

      Reviews.addOne(state, {
        id: reviewId,
        userId,
        text: review.text,
        rating: review.rating
      });
    }
  }
});

export default reducer;

// ------------------------------- Selectors -------------------------------
export const reviewsMap = state => state.reviews.entities;

export const reviewByIdSelector = (state, props) => {
  return reviewsMap(state)[props.id];
}

export const reviewByIdWithUserSelector = (state, props) => {
  const review = reviewsMap(state)[props.id];
  const user = userByIdSelector(state, { id: review.userId });

  return {
    id: review.id,
    text: review.text,
    rating: review.rating,
    user: {
      ...user
    }
  }
}