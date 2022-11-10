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
        state.cart.filter((cart)=>{
            return cart.id !=action.payload.id;
        })
    },
    updateCart:(state,action )=>{
        state.cart.map((cart,idx)=>{
          if(cart.id===action.payload.id){
             
              cart.quantity=action.payload.quantity;


          }
          return cart;
        })  
       
      },
},


});
export const {setCart,addCart,deleteCart,updateCart}=cartSlice.actions;
export default cartSlice.reducer;