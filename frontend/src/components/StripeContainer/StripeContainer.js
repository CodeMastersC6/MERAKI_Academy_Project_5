import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51M3JRbCjjmwYUCLaE8OI2rTLOk9ZZ4Pspla47WoCuUovt4DTcNucyK4fE4AfxBJeO4Z4A4mc0Zc9riZdWS8duYQ3005dd9KzGY"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}