const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

//================= Anas ==================== //

const RoleRouter = require("./Routes/role") 
app.use("/roles",RoleRouter)










//================= Asfour ==================== //
const productRouter = require("./routes/products");
app.use("/product", productRouter);













//================= Abdullah ==================== //
const cartRouter = require("./routes/cart");
app.use("/cart", cartRouter);








//===================================== //





// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
