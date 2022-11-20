import "./style.css"
import { useState } from "react"
import { CardElement,useElements,useStripe } from "@stripe/react-stripe-js"
import StripeContainer from "../StripeContainer/StripeContainer"
const Payment = ()=>{
   

    return (
        <div className="main_main_main">
            <div className="main_payment">
                <h1>Payment</h1>
                <h4>All transactions are secure and encrypted.</h4>
                <div className="div_payment">
                    <input className="input_width" type={"checkbox"} ></input>
                    <h4>Credit card</h4>
                    <input className="input_width" type={"checkbox"} value="cridet"></input>
                    <h4>Cash on Delivery (COD)</h4>
                </div>
                <div className="details_payment">
                    {/* <input placeholder="Card Number"></input>
                    <input placeholder="Name On Card"></input> */}
                    <div className="payment_div_detials">
                      
                    </div>
                 <h1>Billing address</h1>
                 <h4>Select the address that matches your card or payment method.</h4>
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
                <h1>Info Card</h1>
             <div className="details_card_one">
                <input placeholder="Discount code"></input>
                <button className="payment_go1">Apply</button>
             </div>
             <div className="details_card_one">
                <p>Total</p>
                <p>USD $12.54</p>
             </div>
            </div>
        </div>
    )
}

export default Payment