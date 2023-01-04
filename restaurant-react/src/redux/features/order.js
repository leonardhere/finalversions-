import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { STATUS } from '../constants/constants';
import requests from '../requests/requests';
import { productMap } from '../selectors';

export const makeOrder = createAsyncThunk(
  'order/make',
  (order) => {
    const data = requests.makeOrder(order);
    return data;
  }
);

// ----------------------------------- Slice (reducer + actions) -----------------------------------

const initState = {
  entities: {},
  status: STATUS.empty, //TODO Вынести в serverResponse
  serverResponse: {}
}

const { reducer, actions } = createSlice({
  name: 'order',
  initialState: initState,
  reducers: {
    increment: (state, { payload: id }) => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: (state.entities[id] || 0) + 1
        }
      }
    },
    decrement: (state, { payload: id }) => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: state.entities[id] > 0 ? state.entities[id] - 1 : 0
        }
      }
    },
    remove: (state, { payload: id }) => {
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: 0
        }
      }
    },
  },
  extraReducers: {
    [makeOrder.pending.type]: (state) => {
      return {
        ...state,
        status: STATUS.loading,
        serverResponse: {
          ...state.serverResponse,
          error: null
        }
      }
    },
    [makeOrder.fulfilled.type]: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        entities: {}, // При удачном ответе от сервера, очищается корзина!
        status: STATUS.loaded,
        serverResponse: payload
      }
    },
    [makeOrder.rejected.type]: (state, action) => {
      return {
        ...state,
        status: STATUS.error,
        serverResponse: {
          ...state.serverResponse,
          error: null
        }
      }
    }
  }
});

const { increment, decrement, remove, clearOrder } = actions;

export default reducer;
export { increment, decrement, remove, clearOrder };

// ----------------------------------- Selectors -----------------------------------
const order = state => state.order;

export const orderList = state => order(state).entities;

export const orderResponseStatus = state => order(state).status;

//TODO Оптимизировать этот метод!
export const orderedProductsSelector = createSelector(
  // Массив значений, от которых зависит, будет ли пересчитываться функция
  [productMap, orderList],
  (products, order) => {
    const orderIds = Object.keys(order);
    const productArray = Object.keys(products).map(key => products[key]);
    return productArray.filter(product => orderIds.includes(product.id)).map(product => {
      return {
        ...product,
        amount: order[product.id]
      }
    })
  });

export const totalOrderPriceSelector = createSelector([orderedProductsSelector], (product) => {
  return product.reduce((acc, { amount, price }) => acc + amount * price, 0)
});

export const orderProductAmountSelector = (state, props) => {
  return orderList(state)[props.id];
}
