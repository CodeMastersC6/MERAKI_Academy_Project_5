import React, { useContext, useState, useEffect } from "react";
import { useNavigate,Link  } from "react-router-dom";
import "./style.css";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { BsCurrencyDollar } from "react-icons/bs";

import {GrDeliver} from 'react-icons/gr'
const ProductInfo=()=>{
const [info,setInfo]=useState([])
  const { productId } = useSelector((state) => {
    return {
      productId: state.product.productId,
 
    };
  });
console.log(productId)
 const Navigate=useNavigate();
  const dispatch=useDispatch();
// const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState();


      //const[count,setCount]=useState(1);
// const { products } = useSelector((state) => {
//     return {
//       products: state.products.products,
//     };
//   });
// const{product}=useSelector((state)=>{
//     return{
//         product:state.product.product
//     }
//   })

//create function  getAllProductById

useEffect(()=>{
  axios.get(`http://localhost:5000/product/get/17`)
  .then((result) => {
      setMessage("Success");
      setInfo(result.data.result)
       console.log(result.data.result)
       console.log(info)

    })
    .catch((err) => {
       setMessage(err.response.data.message);
    });
},[])   
  
 
 


return(
  <>
  <div className="div_img">
      <img src={info.image}></img> 
      </div>
    <div className="productInfoMain">
      
    <p className="p_name_des">{"category Item : "+info.category}</p>
    <p className="p_name_des">{"Name Item :  "+info.name}</p>
    <p className="p_name_des">{info.description}</p>
    <p className="p_name_des">{"Price "+"$"+info.price}</p>
    <div className="but_part1">
      <button className="buttom_info" onClick={()=>{
        Navigate(-1)
      }}>Back</button>
      <button className="buttom_info">Add To Cart</button>
    </div>
    
    </div>
    <div className="main_left">
      <div className="main_left1">
        <p className="p_icons_left"><GrDeliver></GrDeliver></p>
        <p>DELIVERY INFO</p>
        <p>From then, delivery is generally within 2-10 days, depending on your location</p>
        </div>
      <div className="main_left1"> <p className="p_icons_left"><BsCurrencyDollar></BsCurrencyDollar></p>
        <p>30 DAYS RETURNS</p>
        <p>Not the right fit? No worries. We'll arrange pick up and a full refund within 7 days including the delivery fee.</p></div>
    </div>
    </>
)
};





























export default ProductInfo;