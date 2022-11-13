 import React, { useContext, useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import "./style.css";
 import { useDispatch, useSelector } from "react-redux";
 import axios from "axios";
import { deleteCart, updateCart,addCart,setCart } from "../../redux/reducer/cart";


const Cart = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [message, setMessage] = useState("");
  const [totPrice, setTotPrice] = useState(0);
  const [idCart, setIdCart] = useState("");
  
  const [quantity, setQuantity] = useState(0);
  
  

const { cart ,userId} = useSelector((state) => {
  return {
    cart: state.cart.cart,
    userId:state.auth.userId,
  };
});
console.log("userId:",userId)


  //create function getAllCart
useEffect(()=>{
  axios
  .get(`http://localhost:5000/cart/${userId}`)
  .then((result) => {
    setMessage("Success");
    // setCart(result.data.result);
    dispatch(setCart(result.data.result));
    
    console.log(result);
  })
  .catch((err) => {
    setMessage(err.response.data.message);
    console.log(err);
  });
},[])    
    

  
  // function UpdateCart
  const updateCartById =async (id) => {

  await axios.put(`http://localhost:5000/cart/update/${id}`,{
      quantity,
    })
    .then((result)=>{
      console.log(result)
      dispatch(updateCart({ id, quantity }));
    })
    .catch((err)=>{
      console.log(err)
    })

  };
      
  // create function deleteCartByID
  const deleteCartByID = async(id) => {
   // console.log("id:", id);
   await axios.delete(`http://localhost:5000/cart/delete/${id}`)
      .then((result) => {
        console.log(result.data);
        dispatch(deleteCart(id));
      })
      .catch((err) => {
        console.log(err.message);
        // console.log(err);
      });
  };
  return (
    <div className="cartMain">
      {cart&&cart.map((elem,index)=>{
        return(
          <div className="Total">
            {(elem.price)*(elem.quantity)+(elem.price)*(elem.quantity)}
          </div>
        )
      })}
        <p className="MyCart">My Cart:</p>
      <div>
        {cart&&cart.map((elem, i) => {
        //console.log(elem);
          return (
            <div className="CartMap" key={i}>
              
              <div className="Cart">
              
                <img className="imgCart" src={elem.image} />
                <div className="namePrice">
                <p className="nameCart">{elem.name}</p>

               
                <div className="SubtotalMain">
                <p className="priceCatr">Price:'{elem.price}.00'JD.</p>
                <p className="Subtotal">Subtotal'{(elem.price)*(elem.quantity)}.00'JD.</p>
                </div>
                <p className="QC"> Quntity: '{elem.quantity}' pc.</p>
                </div>
              <div className="buttonCart">
                <div className="QuntityCart">
                 
                  <button className="QUpdate"
                    onClick={() => {
                      console.log(elem.cid);
                      updateCartById(elem.cid)
                      // setIdCart(elem.id)
                      
                     }}>
                    Quntity
                  </button>
                  <input className="inputQ"
                    type="number"
                    placeholder="Choose the quantity you want"
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
            
                </div>
             
             
              <button className="ClearCart" onClick={() => {
                      deleteCartByID(elem.cid)}}>
                Clear 
              </button>
              </div>
             
             
              </div>
              {/* <div className="note">
                <p>Special Instructions For Seller</p>
                <textarea>Note</textarea>
              </div> */}
              
            </div>
            
          );
        })}
        <div className="buttonCartA">
           <button className="ProceedToCheckout"onClick={(e) => {
                  Navigate("/payment");
                }}>
                  Proceed to checkout
                </button>
               

         <button
                className="ContinueShopping"
                onClick={(e) => {
                  Navigate("/home");
                }}
              >
                Continue Shopping
              </button>
              </div>
      </div>
      
    </div>
  );
};


export default Cart;
