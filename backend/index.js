const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

//================= Anas ==================== //
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Meraki Cohort-6 (code_Masters_6)",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})
const RoleRouter = require("./routes/role") 
app.use("/roles",RoleRouter)
const RegisterRouter = require("./routes/register")
app.use("/register",RegisterRouter)

const RouterLogin = require("./routes/login")
app.use("/login",RouterLogin)








//================= Asfour ==================== //
const productRouter = require("./routes/products");
app.use("/product", productRouter);













//================= Abdullah ==================== //
const cartRouter = require("./routes/cart");
app.use("/cart", cartRouter);
const userRouter = require("./routes/users");
app.use("/users", userRouter);






//===================================== //





// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
