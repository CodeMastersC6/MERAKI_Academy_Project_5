// product
// auth for anas
import { createSlice } from "@reduxjs/toolkit";

const producthSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = producthSlice.actions;

export default producthSlice.reducer;
