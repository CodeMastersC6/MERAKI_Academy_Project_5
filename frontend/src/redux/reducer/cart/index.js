// cart for Asfour
import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
name:"cart",
initialState:{
    cart:[],
   
},
reducers:{
    setCart: (state, action) => {
        state.cart = action.payload;
    },
    addCart:(state,action)=>{
        state.cart.push(action.payload);
    },
    deleteCart:(state,action)=>{
        state.cart = state.cart.filter((carts)=>{
            return carts.cid !== action.payload;
        })
    },
    updateCart:(state,action )=>{
        state.cart= state.cart.map((carts,idx)=>{
          if(carts.cid===action.payload.id){
             
              carts.quantity=action.payload.quantity;

          }
          return carts;

        })  
       
      },
},


});
export const {setCart,addCart,deleteCart,updateCart,setCartId}=cartSlice.actions;
export default cartSlice.reducer;