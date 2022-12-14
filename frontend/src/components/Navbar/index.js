import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { setProducts } from "../../redux/reducer/product";
import { setLogout, setUserId } from "../../redux/reducer/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {AiTwotoneHeart} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
const logo = require('./Groceries.png')
//===============================================================

const NavBar = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("true");
  const [findMe, setFindMe] = useState("");
  const userName = localStorage.getItem("firstName");
  // const isLoggedIn = true;
  const navigate = useNavigate();
  const { userId, isLoggedIn, products,cart } = useSelector((state) => {
    return {
      userId: state.auth.userId,
      isLoggedIn: state.auth.isLoggedIn,
      products: state.product.products,
      cart:state.cart.cart
    };
  });
  console.log(isLoggedIn)
  console.log(cart.length)
  const token = localStorage.getItem("token");
  // console.log(token)
  const getProductsBySearch = () => {
    axios
      .get(`http://localhost:5000/product/search/${findMe}`)
      .then((result) => {
        setMessage("Success");
        dispatch(setProducts(result.data.products));
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  //===============================================================

  return (
    <>
      <div className="NavBar">
        { token? (
          <>
            <div className="black_header">
              <p> <span>Welcome</span> {userName}</p>{" "}
            </div>
            <div className="Navbar_Link">
              <div className="link">
                <img
                 className="image_icons" src={logo} onClick={()=>{
                navigate("/home")
               }} />
              </div>

              <div className="link">
                <input
                  className="searchBar"
                  placeholder="Looking For Something ?"
                  onChange={(e) => {
                    setFindMe(e.target.value);
                  }}
                ></input>
                <button
                  className="search_Button"
                  onClick={() => {
                    getProductsBySearch();
                  }}
                >
                  Search
                </button>
              </div>
              <div className="Link" onClick={()=>{
                navigate("/cart")
              }}>Cart <AiTwotoneHeart></AiTwotoneHeart></div>

              <div>
                <button
                  className="logout"
                  onClick={() => {
                    dispatch(setLogout());
                    navigate("/");
                  }}
                >
                  Logout<br></br><FiLogOut></FiLogOut>
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default NavBar;
