 import React, { useContext, useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
 import "./style.css";
 import { useDispatch, useSelector } from "react-redux";
 import axios from "axios";
import { deleteCart, updateCart } from "../../redux/reducer/cart";


const Cart = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [message, setMessage] = useState("");
  const [totPrice, setTotPrice] = useState(0);
  const [idCart, setIdCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  // const [note, setNote] = useState("");
  // const [updateBox, setUpdateBox] = useState(false);
  

  //create function getAllCart
  const getAllCart = () => {
    
    axios
      .get("http://localhost:5000/cart")
      .then((result) => {
        setMessage("Success");
        setCart(result.data.result);
        console.log(result);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
        console.log(err);
      });
  };
  // const handleUpdate=(cart)=>{
  //   setUpdateBox(!updateBox)

  //   setIdCart(cart.id)
  //   setQuantity(cart.quantity)
  //   if (updateBox)updateCartById(cart.id)
  // }
  // function UpdateCart
  const updateCartById =async (id) => {
try{
    console.log("idUpdate:", id);
    const info = { quantity };
   await axios.put(`http://localhost:5000/cart/${id}`, { quantity })
      .then((result) => {
        console.log(result.data);

        dispatch(updateCart({ id, quantity }));
        // setIdCart("");
      })
    }catch(err){
        console.log(err);
      };
  };
  //create function deleteCartByID
  const deleteCartByID = (id) => {
    console.log("id:", id);
    axios
      .delete(`http://localhost:5000/cart/${id}`)
      .then((result) => {
        //console.log(result.data);
        dispatch(deleteCart(id));
      })
      .catch((err) => {
        console.log(err.message);
        //console.log(err);
      });
  };
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
    // getCartsByUser();
    getAllCart();
    updateCartById();
    
  }, []);

  // Function to  count
  // const QuntityInc = () => {
  //   setCount(count + 1);
  //   setQuantity(count)
  // };
  // const QuntityDec = () => {
  //   setCount(count - 1);
  //   setQuantity(count)
  // };
  return (
    <div className="cartMain">
      <div>
        {cart.map((elem, i) => {
          return (
            <div className="CartMap" key={i}>
              <div className="a">
                <p className="MyCart">My Cart:</p>
                <img className="imgCart" src={elem.image} />
                <p className="nameCart">{elem.name}</p>

                <p className="priceCatr">{elem.price} JD</p>
                <p className="Discription">{elem.discription}</p>

                <div className="QuntityCart">
                  Quntity: <p>{elem.quantity}</p>
                  <button
                    onClick={() => {
                      updateCartById(elem.id)
                      // setIdCart(elem.id)
                      
                     }}>
                    Quntity
                  </button>
                  <input
                    type="number"
                    placeholder="Quntity"
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                  {/* <button className="QuntityIncCart" onClick={UpdateCart(elem.id)}>
                  +
                </button>
                <button className="countCart">
                  <p>{elem.quantity}</p>
                </button>
                <button className="QuntityDecCart" onClick={UpdateCart(elem.id)}>
                  -
                </button> */}
                </div>
              </div>
              <button
                className="ContinueShopping"
                onClick={(e) => {
                  Navigate("/home");
                }}
              >
                Continue Shopping
              </button>
              <button className="ClearCart" onClick={deleteCartByID(elem.id)}>
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


// export default Cart;
