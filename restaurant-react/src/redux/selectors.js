import { createSelector } from '@reduxjs/toolkit';
import { STATUS } from './constants/constants';
import { reviewsMap } from './features/reviews';

export const productMap = state => state.products.entities;
const restaurantsMap = state => state.restaurants.entities;

// ---------------------------- Current Restaurants ----------------------------


// ---------------------------- Restaurants ----------------------------
export const restaurantsLoadingSelector = state => state.restaurants.status === STATUS.loading;
export const restaurantsLoadedSelector = state => state.restaurants.status === STATUS.loaded;

export const restaurantReviewsLoadingSelector = state => state.reviews.status === STATUS.loading;
export const restaurantReviewsLoadedSelector = state => state.reviews.status === STATUS.loaded;

export const restaurantListSelector = createSelector([restaurantsMap], (restaurantsMap) => {
  return Object.values(restaurantsMap);
});

//FIXME Сделать более красивым
export const restaurantByProductId = (state, { product }) => {
  const result = restaurantListSelector(state).filter(rest => {
    const menu = rest.menu.find(menu => menu === product.id);
    if (menu) return rest;
  });

  return result[0];
}

export const restaurantByIdSelector = ((state, { id }) => {
  return restaurantsMap(state)[id];
});

export const restaurantReviewsListSelector = (state, { id }) => {
  const reviewList = restaurantsMap(state)[id].reviews.map(key => {
    return reviewsMap(state)[key];
  })
  return reviewList; // просто список, не map
};

export const averageRatingSelector = createSelector(
  restaurantByIdSelector,
  reviewsMap,
  (restaurant, reviews) => {
    const ratings = restaurant.reviews.map((id) => reviews[id]?.rating || 0);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length
    );
  });

// ---------------------------- Products -------------------------------
export const productLoadingSelector = state => state.products.status === STATUS.loading;
export const productLoadedSelector = state => state.products.status === STATUS.loaded;

export const productByIdSelector = (state, id) => {
  const product = productMap(state)[id];

  return product;
};

// ---------------------------- Order ----------------------------------


// ---------------------------- Review ----------------------------------


// ---------------------------- Users ----------------------------------


