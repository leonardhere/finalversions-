import { createNextState as produce } from '@reduxjs/toolkit';
import {
  ERROR,
  FETCH_CURRENT_REST_PRODUCTS,
  LOADED,
  LOADING,
  STATUS
} from '../constants/constants';

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default (state = initState, action) => {

  const { type, data, error } = action;

  switch (type) {
    case FETCH_CURRENT_REST_PRODUCTS + LOADING: {

      console.log(state);

      return {
        ...state,
        status: STATUS.loading,
        error: null
      }
    }
    case FETCH_CURRENT_REST_PRODUCTS + LOADED: {
      const entities = data.reduce((acc, product) => {
        return {
          ...acc,
          [product.id]: {
            ...product
          }
        }
      }, {});

      return produce(state, draft => {
        Object.assign(draft.entities, entities);
        draft.status = STATUS.loaded;
      });
    }
    case FETCH_CURRENT_REST_PRODUCTS + ERROR: {
      return {
        ...state,
        error,
        status: STATUS.error
      }
    }
    default: return state;
  }
}