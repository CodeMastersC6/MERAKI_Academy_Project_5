import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProductId} from "../../redux/reducer/product";

// import { AuthContext } from "../../contexts/authContext";
//===============================================================

const Home = () => {
  const dispatch = useDispatch();
const navigate= useNavigate()
  const [message, setMessage] =useState("")
  // const { token, userId } = useContext(AuthContext);
  const [products, setProducts] = useState([])
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
            <div key={index} className="product" onClick={()=>{
              dispatch(setProductId(product.id));
navigate("/productInfo")}}>
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
