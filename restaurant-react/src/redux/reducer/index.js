import order from '../features/order';
import restaurants from './restaurants';
import products from './products';
import reviews from '../features/reviews';
import users from '../features/users';
import currentRestaurant from '../features/currentRestaurant';

import { connectRouter } from 'connected-react-router'
import history from '../../history';

export default {
  router: connectRouter(history),
  order: order,
  restaurants: restaurants,
  currentRestaurant: currentRestaurant,
  products: products,
  reviews: reviews,
  users: users
};