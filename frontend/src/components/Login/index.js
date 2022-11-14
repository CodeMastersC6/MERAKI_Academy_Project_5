import axios from "axios"
import "./style.css"
import React, { useContext, useState, useEffect } from "react";
import {setLogin,setUserId} from "../../redux/reducer/auth"
import "./style.css";
import { useDispatch } from "react-redux";
import Navbar_b_token from "../Navbar_b_token/indes";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import { useGoogleLogin } from 'react-google-login'
import { current } from "@reduxjs/toolkit";

const Login = ()=>{
    const dispatch = useDispatch()
const navigate=useNavigate()
  

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  

  //===============================================================

  const login =  () => {
    axios.post("http://localhost:5000/login",{
        email,
        password
    })
  
    .then((result)=>{
        // dispatch(setLogin(result.data.token))
        // dispatch(setUserId(result.data.userId))
       
        setStatus(false)
        
        navigate("/home")
        console.log(result) 
         {localStorage.setItem("firstName",result.data.firstName)}
         {localStorage.setItem("token",result.data.token)}
         {localStorage.setItem("userId",result.data.userId)}

    })
    .catch((err)=>{
        console.log(err)
        setMessage(err.response.data.message)
        setStatus(true)
    })
  };
  const responseGoogle = (response) => {
    console.log(response);
   
        // console.log('Success',response.profileObj);
        console.log('Success',response.tokenId);
    
  }
  const onFailure=(response)=>{
console.log( 'onFailure response:',response);
  }
  
    return (
        <>
        <Navbar_b_token/>
        
        <div className="login_main">
            <p>Login</p>
            <p>Please login below account detail</p>
            <label>Email</label>
            <input placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value)
            }}></input>
            <label>Password</label>
            <input placeholder="password" type={"password"} onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            <p className="siginWithGoogle"> <GoogleLogin
  clientId="994328639474-ub85dkgodp4vrm5nvfaemiklfko5jpt9.apps.googleusercontent.com"
  onSuccess={responseGoogle}
  onFailure={onFailure}
  cookiePolicy={'single_host_origin'}
  isSignedIn={true}
  accessType='offline'
onClick={''}  /><span>Sign In With Google</span></p>
            {status&&<p className="message_response">{message}</p>}
            <button  onClick={login}>Sign in</button>
            
        </div>
        <img className="image_login" src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=2000"></img>
            <img className="image_login1" src="https://img.freepik.com/premium-psd/login-page-3d-icon-premium-psd_418302-3022.jpg?w=2000"></img>
        </>
    )
}
export default Login