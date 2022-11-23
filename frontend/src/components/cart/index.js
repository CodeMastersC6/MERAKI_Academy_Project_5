import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  deleteCart,
  updateCart,
  addCart,
  setCart,
} from "../../redux/reducer/cart";

import { AiOutlineDelete
} from 'react-icons/ai';
const Cart = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
 

  const [quantity, setQuantity] = useState(0);

  const { cart, userId } = useSelector((state) => {
    return {
      cart: state.cart.cart,
      userId: state.auth.userId,
    };
  });
  console.log("userId:", userId);
 const UserId1= localStorage.getItem("userId")
 console.log(UserId1)
  //create function getAllCart
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/${UserId1}`)
      .then((result) => {
        // setMessage("Success");
        // setCart(result.data.result);
        dispatch(setCart(result.data.result));

        console.log(result);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log(err);
      });
  }, []);

  // function UpdateCart
  const updateCartById = async (id) => {
    await axios
      .put(`http://localhost:5000/cart/update/${id}`, {
        quantity,
      })
      .then((result) => {
        console.log(result);
        dispatch(updateCart({ id, quantity }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // create function deleteCartByID
  const deleteCartByID = async (id) => {
    // console.log("id:", id);
    await axios
      .delete(`http://localhost:5000/cart/delete/${id}`)
      .then((result) => {
        console.log(result.data);
        dispatch(deleteCart(id));
      })
      .catch((err) => {
        console.log(err.message);
        // console.log(err);
      });
  };
  var sum = 0;

  return (
    <>
    
    <section class="section-pagetop-bg">
       <div class="container">
           <h2 class="title-page">Shopping cart</h2>
       </div> 
       </section>
       
       <section class="section-content-padding-y">
       <div class="container">
       
       <div class="row">
           <main class="col-md-9">
       <div class="card">
       
       <table class="table table-borderless">
       <thead class="text-muted">
       <tr class="small text-uppercase">
        <div className="div_info">
       <th scope="col" className="h">Product</th>
       <th scope="col" width="60" className="h">Quantity</th>
       <th scope="col" width="60" className="h">Price</th>
       </div>
       <th scope="col" class="text-right" width="200"> </th>
       </tr>
       </thead>
       <tbody>
       <tr>
        {cart && cart.map((elem, i) => {
                      sum+=elem.price*elem.quantity

            return (
              
              <div className="grid_cart">
              <td>
              <figure class="itemside">
              <div class="aside">
              </div>
              <figcaption class="info">
                  <img className="image_cart" src={elem.image} ></img>
                  <p class="small text-muted">{elem.name}</p>
              </figcaption>
          </figure>
      </td>
      <td> 
          <select class="form-control" onChange={(e)=>{
            setQuantity(e.target.value);
            console.log(e.target.value)
            
          }}>
              <option>1</option>
              <option>2</option>	
              <option>3</option>	
              <option>4</option>
              <option>5</option>
              <option>6</option>
          </select> 
          <br></br>
          <button className="but_123" onClick={()=>{
            updateCartById(elem.cid);

          }}>Edit</button>
      </td>
      <td> 
          <div class="price-wrap"> 
              <var class="price">{elem.price*elem.quantity+"JD"}</var> 
          </div> 
      </td>
      <td class="text-right"> 
          <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> 
          </a> 
          
          <p className="p_remove" onClick={()=>{
             deleteCartByID(elem.cid);
          }}><AiOutlineDelete></AiOutlineDelete></p>
      </td>
      </div>
  );
})}
</tr>
  </tbody>
  </table>
           
              
       
       <div class="card-body1">
           <button className="but_procces" onClick={()=>{
            Navigate("/payment");
            localStorage.setItem("total",sum)
           }}>Procces To Checkout  </button> 
          
          <button class="but_procces" onClick={()=>{
             Navigate("/home");

          }}><span>Continue To shopping </span></button>
           
       </div>	
       </div> 
       
       <div class="alert alert-success mt-3">
           <p class="icontext">
            Free Delivery within 1-2 weeks</p>
       </div>
       
           </main>
           <aside class="col-md-3">
               <div class="card mb-3">
                   <div class="card-body">
                  
                   </div> 
               </div>  
               <div class="card">
                   <div class="card-body">
                           <dl class="dlist-align">
                           <dt>Total price:</dt>
                           <u class="text-right">{sum+" JD"}</u>
                           </dl>
                           
                           <hr />
                          
                           
                   </div> 
               </div>  
           </aside> 
       </div>
       
       </div> 
       </section>
      

    </>
  );
};

export default Cart;
