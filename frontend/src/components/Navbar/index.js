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
//===============================================================

const NavBar = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("true");
  const [findMe, setFindMe] = useState("");
  const userName = localStorage.getItem("firstName");
  // const isLoggedIn = true;
  const navigate = useNavigate();
  const { userId, isLoggedIn, products } = useSelector((state) => {
    return {
      userId: state.auth.userId,
      isLoggedIn: state.auth.isLoggedIn,
      products: state.product.products,
    };
  });
  console.log(isLoggedIn)
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
        {isLoggedIn && token? (
          <>
            <div className="black_header">
              <p> <span>Welcome</span> {userName}</p>{" "}
            </div>
            <div className="Navbar_Link">
              <div className="link">
                <img
                  className="logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9JLwYrxicQ2ZLA7XDINTzPasrI-5sx6onA&usqp=CAU"
                />
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
              <div className="Link">Cart <AiTwotoneHeart></AiTwotoneHeart></div>

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
