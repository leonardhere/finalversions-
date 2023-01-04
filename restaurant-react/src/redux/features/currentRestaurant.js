import { createSlice } from "@reduxjs/toolkit";

// ------------------------ Slice -----------------------------
const initState = {
  currentRestaurantId: null
}

const { reducer, actions } = createSlice({
  name: 'current_restaurant',
  initialState: initState,
  reducers: {
    setCurrentRestaurant: (state, action) => {
      const { payload } = action;

      state.currentRestaurantId = payload;
    }
  }
})
const { setCurrentRestaurant } = actions;

export default reducer;
export { setCurrentRestaurant };

// ------------------------ Selectors -----------------------------
const currentRestaurantSelector = state => state.currentRestaurant;

export const currentRestaurantIdSelector = state => {
  return currentRestaurantSelector(state).currentRestaurantId;
}
