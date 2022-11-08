import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import axios from "axios";

// import { AuthContext } from "../../contexts/authContext";
//===============================================================

const Home = () => {

  const [message, setMessage] =useState("")
  // const { token, userId } = useContext(AuthContext);
  const [products, setProducts] = useState([
    {
      name: "Meat",
      image:
        "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
      price: 15,
    },
    {
      name: "Meat",
      image:
        "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
      price: 15,
    },
    {
      name: "Meat",
      image:
        "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
      price: 15,
    },
    {
      name: "Meat",
      image:
        "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
      price: 15,
    },
    {
      name: "Meat",
      image:
        "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
      price: 15,
    },
  ]);
  const [category, setCategory] = useState([
      "Meat",
    "bread",
    "Yougart",
    "Fruits",
    "Vigtables",
    "Juice",
  ]);
  //===============================================================
  const getAllProducts =()=> {
    axios.get("http://localhost:5000/product")
    .then((result) => {
        setMessage("Success");
        setProducts(result.data.result);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const getAllProductByCategory =(str)=> {
    axios.get(`http://localhost:5000/product/${str}`)
    .then((result) => {
        setMessage("Success");
        setProducts(result.data.result);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };
 

  //===============================================================

  useEffect(() => {
    getAllProducts();
   },[]);


  //===============================================================

  return (

    <>
      <div className="categorys">
      <div className="category" onClick={(e)=>{
             getAllProducts()
            }}>
              <p>All</p>
            </div>
        {category?.map((category, index) => (
          <div key={index} className="category">
            <div className="category" onClick={(e)=>{
             getAllProductByCategory(e.target.innerHTML)
            }}>
              <p>{category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="filterbar"> Filterbar</div>
        <div className="products">
          {products?.map((product, index) => (
            <div key={index} className="product">
              <div>
                <img className="product_image" src={product.image} />
              </div>
              <div className="product_details">
                <div className="details_component">{product.name}</div>
                <div className="details_component">{product.price}</div>
                <div>
                  <button> Wishlist</button>
                  <button> Cart</button>
                  <button>View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </>

  );
};

export default Home;
