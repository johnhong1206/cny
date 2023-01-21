import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const numberpoolSlice = createSlice({
  name: "numberPool",
  initialState,
  reducers: {
    addToNumberPool: (state, action) => {
      console.log(state.items);
      state.items = [...state.items, action.payload];
    },
  },
});

export const { addToNumberPool } = numberpoolSlice.actions;
export const selectBasketItems = (state) => state.numberPool.items;
// export const selectBasketItemsWithId = (state, id) =>
//   state.basket.items.filter(item => item.id === id);

export default numberpoolSlice.reducer;
