import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Cart = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");
  const [totPrice, setTotPrice] = useState(0);
  const [cart, setCart] = useState([
    {
      name: "blueberry",
      price: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbmf30Jwo1iy2u6Mc6WIEaB2JRoEY2CDSog&usqp=CAU",
      discription: "fresh blueberry",
    },{
        name: "blueberry",
        price: 10,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbmf30Jwo1iy2u6Mc6WIEaB2JRoEY2CDSog&usqp=CAU",
        discription: "fresh blueberry",
      }
  ]);
 
  
  //create function getCartsByUser
  const getCartsByUser = (user) => {
    axios
      .get(`http://localhost:5000/cart/${user}`)
      .then((result) => {
        setMessage("Success");
        setCart(result.data.result);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  useEffect(() => {
    getCartsByUser();
  }, []);

  // Function to  count
  const QuntityInc = () => {
    setCount(count + 1);
  };
  const QuntityDec = () => {
    setCount(count - 1);
  };
  return (
    <div className="cartMain">
      <div>
        {cart.map((elem, i) => {
          return (
            <div className="CartMap" key={i}>
                <div className="a" >
              <p className="MyCart">My Cart:</p>
              <img className="imgCart" src={elem.image} />
              <p className="nameCart">{elem.name}</p>
             

              <p className="priceCatr">{elem.price} JD</p>
              <p className="Discription">{elem.discription}</p>
              
              <div className="QuntityCart">
                Quntity:
                <button className="QuntityIncCart" onClick={QuntityInc}>
                  +
                </button>
                <button className="countCart">
                  <p>{count}</p>
                </button>
                <button className="QuntityDecCart" onClick={QuntityDec}>
                  -
                </button>
              </div>
              </div>
              {/* <button className="addToCart" onClick={""}>Add To Cart</button> */}
              {/* <button className="BuyNow" onClick={""}>Buy Now</button> */}
              <button
                className="ContinueShopping"
                onClick={(e) => {
                  Navigate("/");
                }}
              >
                Continue Shopping
              </button>
              <button className="ClearCart" onClick={""}>
                Clear Cart
              </button>
              <div className="SubtotalMain">
                <p className="Subtotal">Subtotal {elem.price}JD</p>
                <button className="ProceedToCheckout" onClick={""}>
                  Proceed to checkout
                </button>
              </div>
              <div className="note">
                <p>Special Instructions For Seller</p>
                <textarea>Note</textarea>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
