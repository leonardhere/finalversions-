import {
  ERROR,
  FETCH_RESTAURANTS,
  LOADED,
  LOADING,
  STATUS
} from '../constants/constants';

import {
  addReview,
} from '../features/reviews';

const initState = {
  status: STATUS.empty,
  entities: {},
  error: null
}

export default (state = initState, action) => {
  const {
    type,
    payload,
    meta,
    data,
    error } = action;

  switch (type) {
    case FETCH_RESTAURANTS + LOADING: {
      return {
        ...state,
        error: null,
        status: STATUS.loading
      }
    }
    case FETCH_RESTAURANTS + LOADED: {
      const entities = data.reduce((acc, rest) => (
        {
          ...acc,
          [rest.id]: rest
        }
      ), {});

      return {
        ...state,
        status: STATUS.loaded,
        entities
      }
    }
    case FETCH_RESTAURANTS + ERROR: {
      return {
        ...state,
        status: STATUS.error,
        error: error
      }
    }
    case addReview.type: {

      const { reviewId } = meta;
      const { restaurantId } = payload;

      return {
        ...state,
        entities: {
          ...state.entities,
          [restaurantId]: {
            ...state.entities[restaurantId],
            reviews: [
              ...state.entities[restaurantId].reviews,
              reviewId
            ]
          }
        }
      }
    }
    default: return state
  }
}