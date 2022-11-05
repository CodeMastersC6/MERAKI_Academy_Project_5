const express = require("express");
const { createNewProduct } = require("../controllers/products");





const productRouter = express.Router();





productRouter.post("/",createNewProduct);



module.exports = productRouter;
