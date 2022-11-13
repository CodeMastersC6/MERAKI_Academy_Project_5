import React, { useContext, useState, useEffect } from "react";
import { useNavigate,Link  } from "react-router-dom";
import "./style.css";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";


const ProductInfo=()=>{

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


      

//create function  getAllProductById

const getAllProductById =()=> {
    axios.get(`http://localhost:5000/product/get/${productId}`)
    .then((result) => {
        setMessage("Success");
        dispatch(setProducts(result.data.result));
      })
      .catch((err) => {
        //  setMessage(err.response.data.message);
         console.log(err);
      });
  };
 
  useEffect(() => {
    getAllProductById();
   },[]);


return(
    <div className="productInfoMain">

{/* <img className="imgProductinfo" src=""/>
<p className="nameProduct">hii</p>
<p className="priceProduct"></p>
<p className="priceDiscription"></p>
<button className="addToCart">Add To Cart</button>
<button className="BuyNow">Buy Now</button> */}
<div>{products&&products.map((elem,i)=>{
    return(
        <div className="productInfoMap" key={i}>
<p className="nameProduct">{elem.name}</p>
<p className="AvailabilityMain">Availability: <p className="Availability"> In Stock✔️</p></p>

<img className="imgProductinfo" src={elem.image}/>
<p className="priceProduct">Price: {elem.price} JD</p>
<p className="priceDiscription">Discription: {elem.discription}</p>
{/* <div className="Quntity">Quntity:
<button className="QuntityInc" onClick={QuntityInc} >+</button>
<button className="count" ><p>{count}</p></button> 
 <button className="QuntityDec" onClick={QuntityDec}>-</button>
    </div> */}
<button className="addToCart" onClick={""}>Add To Cart</button>
<button className="BuyNow" onClick={ ((e)=>{
    Navigate("/cart")
})}>Buy Now</button>
        </div>
    )
})}
</div>

<div className="staticProdutInfo">
    <div className="DELIVERY">
    <p className="DELIVERYINFO">DELIVERY INFO </p>
    <p className="DELIVERYINFODISCRIPTION">From then, delivery is generally within 2-10 days, depending on your location.</p>
    </div>
    <div className="RETURNS">
    <p className="RETURNSINFO">30 DAYS RETURNS</p>
    <p className="RETURNSINFODISCRIPTION">Not the right fit? No worries. We'll arrange pick up and a full refund within 7 days including the delivery fee.</p>
    </div>
    <div className="WARRANTY">
    <p className="WARRANTYINFO">10 YEAR WARRANTY</p>
    <p className="WARRANTYINFODISCRIPTION">Quality comes first and our products are designed to last.</p>
    </div>
</div>
    </div>
)




};





























export default ProductInfo;