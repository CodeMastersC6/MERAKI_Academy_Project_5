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

const Cart = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [totPrice, setTotPrice] = useState(0);
  const [idCart, setIdCart] = useState("");

  const [quantity, setQuantity] = useState(0);

  const { cart, userId } = useSelector((state) => {
    return {
      cart: state.cart.cart,
      userId: state.auth.userId,
    };
  });
  console.log("userId:", userId);
 const UserId1= localStorage.getItem("userId")
  //create function getAllCart
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/${UserId1}`)
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
    
    <div className="cartMain">
     
      <p className="MyCart">My Cart</p>
      <div>
        {cart &&
          cart.map((elem, i) => {
            sum+=elem.price*elem.quantity
            return (
              <div className="CartMap" key={i}>
                <div className="Cart">
                  <img className="imgCart" src={elem.image} />
                  <div className="namePrice">
                    <p className="nameCart">{elem.name}</p>

                    <div className="SubtotalMain">
                      <p className="priceCatr">Price:'{elem.price}.00'JD</p>
                      <p className="Subtotal">
                        Subtotal'{elem.price * elem.quantity}.00'JD
                      </p>
                    </div>
                    <p className="QC"> Quntity: '{elem.quantity}' pc</p>
                  </div>
                  <div className="buttonCart">
                    <div className="QuntityCart">
                      <button
                        className="QUpdate"
                        onClick={() => {
                          console.log(elem.cid);
                          updateCartById(elem.cid);
                          // setIdCart(elem.id)
                        }}
                      >
                        Quntity
                      </button>
                      <input
                        className="inputQ"
                        type="number"
                        placeholder="Choose the quantity you want"
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      />
                      <button
                      className="ClearCart"
                      onClick={() => {
                        console.log(elem.cid)
                        deleteCartByID(elem.cid);
                      }}
                    >
                      Clear
                    </button>
                    </div>
                    
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
          <button
            className="ProceedToCheckout"
            onClick={(e) => {
              Navigate("/payment");
            }}
          >
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
    <span className="p_totol1">Total</span>
    <p className="p_totol">{sum +" $" }</p>

    </>
  );
};

export default Cart;
