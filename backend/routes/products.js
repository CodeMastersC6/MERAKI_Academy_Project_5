const express = require("express");
const { createNewProduct, getAllProduct } = require("../controllers/products");





const productRouter = express.Router();





productRouter.post("/",createNewProduct);
productRouter.get("/",getAllProduct);



module.exports = productRouter;
