import axios from "axios"
import "./style.css"
import React, { useContext, useState, useEffect } from "react";
import {setLogin,setUserId} from "../../redux/reducer/auth"
import "./style.css";
import { useDispatch } from "react-redux";


const Login = ()=>{
    const dispatch = useDispatch()

  

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
        dispatch(setLogin(result.data.token))
        dispatch(setUserId(result.data.userId))
        setStatus(false)
      

    })
    .catch((err)=>{
        console.log(err)
        setMessage(err.response.data.message)
        setStatus(true)
    })
  };
    return (
        <div className="login_main">
            <p>Login</p>
            <p>Please login below account detail</p>
            <label>Email</label>
            <input placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value)
            }}></input>
            <label>Password</label>
            <input placeholder="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}></input>
            {status&&<p className="message_response">{message}</p>}
            <button onClick={login}>Sign in</button>
        </div>
    )
}
export default Login