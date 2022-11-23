import "./style.css"
import { useState } from "react"
import { CardElement,useElements,useStripe } from "@stripe/react-stripe-js"
import StripeContainer from "../StripeContainer/StripeContainer"
import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { setCart } from "../../redux/reducer/cart"
import axios from "axios"
const Payment = ()=>{
   const total = localStorage.getItem("total")
   const [total1,setTotal1]=useState(total)
   const { cart } = useSelector((state) => {
    return {
      cart: state.cart.cart,
    };
  });
  const UserId1= localStorage.getItem("userId")
const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart/${UserId1}`)
      .then((result) => {
        // setCart(result.data.result);
        dispatch(setCart(result.data.result));

        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(cart)
    return (
        <div className="main_main_main">
            <div className="main_payment">
                <h1>Payment</h1>
                <h3>All transactions are secure and encrypted.</h3>
                <div className="div_payment">
                    <input className="input_width" type={"checkbox"}></input>
                    <h4>Credit card</h4>
                    <input className="input_width" type={"checkbox"} value="cridet"></input>
                    <h4>Cash on Delivery (COD)</h4>
                </div>
                <div className="details_payment">
                   
                    <div className="payment_div_detials">
                      
                    </div>
                 <h1>Billing address</h1>
                 <h3>Select the address that matches your card or payment method.</h3>
                 <div className="div_payment1">
                    <input className="input_width1" type={"checkbox"} ></input>
                    <h4>	Same as shipping address</h4>
                    <input className="input_width1" type={"checkbox"} ></input>
                    <h4>Use a different billing address</h4>
                </div>
                <StripeContainer></StripeContainer>

                </div>
            </div>
            <div className="left_details_card">
                {cart&&cart.map((elem)=>{
                    return (
                        <div className="main_info1">
                        <div className="container_cart">
                            <img src={elem.image} className="image_info"></img>
                            <p>{elem.name}</p>
                            <p>{"$"+elem.price*elem.quantity}</p>
                            <p>{elem.quantity+" pc"}</p>
                            </div>
                            </div>
                    )
                })}
                <h1>Discount Code</h1>
             <div className="details_card_one1">
                <input placeholder="Discount code"></input>
                <button className="payment_go1" onClick={()=>{
                setTotal1(total1-5)
}}>Apply</button>
             </div>
             <div className="details_card_one">
                <p>Total</p>
                <p>USD ${total1}</p>
             </div>
            </div>
        </div>
    )
}

export default Payment