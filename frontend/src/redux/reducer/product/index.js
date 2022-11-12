// product
// auth for anas
import { createSlice } from "@reduxjs/toolkit";

const producthSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    productId:null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    
    },
    
      setProductId: (state, action) => {
        state.productId = action.payload;
      
      },
    
  },
});

export const { setProducts,setProductId } = producthSlice.actions;

export default producthSlice.reducer;
