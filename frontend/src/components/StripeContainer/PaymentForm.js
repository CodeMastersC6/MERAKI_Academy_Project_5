import { CardElement, useElements, useStripe ,PaymentElement} from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import "./style.css"
import { CiCircleCheck } from "react-icons/ci";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const total1 = localStorage.getItem("total")
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [total,setTotal]=useState(1000)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:5000/payment", {
                amount: total1,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}
const form = useRef();

  const sendEmail = () => {
    // e.preventDefault();

    emailjs.sendForm('service_u8n1tfk', 'template_1mdkq9m', form.current, 'tsf3k4JVppvxpd3e2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <>
        <div className="div_hidden">
        <form ref={form} >
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" value="anas.moh.alhawi@gmail.com" />
      <label>Message</label>
      <textarea name="message" value={`success payment ${total}`}/>
      <input type="submit" value="Send" />
    </form>
        </div>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="but_payment_123" onClick={()=>{
                sendEmail()
            }}>Pay</button>
        </form>
        :
       <div>
           <h2>We Send Your Email Payment Details <CiCircleCheck></CiCircleCheck></h2>
       </div> 
        }
            
        </>
    )
}
