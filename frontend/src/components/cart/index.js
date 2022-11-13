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
   //const [cart, setCart] = useState([]);
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
    

  // const handleUpdate=(cart)=>{
  //   setUpdateBox(!updateBox)

  //   setIdCart(cart.id)
  //   setQuantity(cart.quantity)
  //   if (updateBox)updateCartById(cart.id)
  // }
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
  //create function getCartsByUser
  // const getCartsByUser = (user) => {
  //   axios
  //     .get(`http://localhost:5000/cart/${user}`)
  //     .then((result) => {
  //       setMessage("Success");
  //       // setCart(result.data.result);
  //     })
  //     .catch((err) => {
  //       setMessage(err.response.data.message);
  //     });
  // };

 

  
  return (
    <div className="cartMain">
        <p className="MyCart">My Cart:</p>
      <div>
        {cart&&cart.map((elem, i) => {
        //console.log(elem);
          return (
            <div className="CartMap" key={i}>
              
              <div className="CartA">
              
                <img className="imgCart" src={elem.image} />
                <div className="namePrice">
                <p className="nameCart">{elem.name}</p>

                <p className="priceCatr">Price:{elem.price}JD</p>
                <p className="QC"> Quntity: {elem.quantity}</p>
                </div>
              
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
              </div>
             
              <button className="ClearCart" onClick={() => {
                      deleteCartByID(elem.cid)}}>
                Clear Cart
              </button>
              <div className="SubtotalMain">
                <p className="Subtotal">Subtotal{(elem.price)*(elem.quantity)}JD</p>
             
              </div>
              {/* <div className="note">
                <p>Special Instructions For Seller</p>
                <textarea>Note</textarea>
              </div> */}
              
            </div>
            
          );
        })}
        <div className="buttonCart">
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
