import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/auth"
import cartReducer from "./reducer/cart"
import productReducer from "./reducer/product"
export default configureStore({
  reducer: {

    /*Anas line 8*/
auth:authReducer,









/*Asfour line 19 */











/*Abdullah line 31*/
product:productReducer,








}
});