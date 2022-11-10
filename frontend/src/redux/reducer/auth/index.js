// auth for anas
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    // why the value is null and not ''?
    token : null||localStorage.getItem("token"),
    userId : null||localStorage.getItem("userId"),
    isLoggedIn : localStorage.getItem("token") ? true : false
  },
  reducers: {
    setLogin : (state, action) => {
        state.token = action.payload
        localStorage.setItem("token",state.token)
        state.isLoggedIn = true
    },
    setUserId :(state,action)=>{
        state.userId = action.payload
        localStorage.setItem("userId",state.userId)
    },
    setLogout :(state,action)=>{
        state.token = null
        state.userId = null
        state.isLoggedIn = false
        localStorage.clear()

    }
  },
});

export const {setLogin,setUserId,setLogout} = authSlice.actions;

export default authSlice.reducer;
