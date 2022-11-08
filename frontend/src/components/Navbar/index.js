import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
// import { setLogout } from "../../redux/reducer/auth";
// import { AuthContext } from "../../contexts/authContext";
import { useSelector, useDispatch } from "react-redux";

//===============================================================

const NavBar = () => {
  const dispatch = useDispatch();
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("Ahmad");


  // const getProductsBySearch = () => {

  //   axios
  //     .get(
  //       `http://localhost:5000/product`,
  //             )
  //     .then((result) => {
  //       setMessage("Success");
  //       setProducts(result.data.result);
  //     })
  //     .catch((err) => {
  //       setMessage(err.response.data.message);
  //     });
  // };



  // const { logout, setLogout } = useContext(true);
  // const { isLoggedIn } = useSelector((state) => {
  //   return {
  //     isLoggedIn: state.auth.isLoggedIn,
  //   };
  // });
  //===============================================================

  
  return (
    <>
      <div className="NavBar">
        {isLoggedIn ? (
         
          <>
          <div className="black_header"><p>Welcome {user}</p> </div>
          <div className="Navbar_Link">
            <div className="link">
              <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9JLwYrxicQ2ZLA7XDINTzPasrI-5sx6onA&usqp=CAU"/>
            </div>
         
            <div className="link">
            <input className="searchBar" placeholder="Looking For Something ?"></input>
            <button className="search_Button" >
              Search
            </button>
            </div>
            <div className="link">
            <Link className="Link" to="">
              Cart
            </Link>
            </div>
            <div className="link">
            <Link className="Link" to="">
              Wish List
            </Link>
            </div>
<div>
            <button className="logout">
              Logout
            </button>
            </div>
            </div>
          </>
        ) : (
          <>
          
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
