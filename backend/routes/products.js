const express = require("express");
const { createNewProduct,
     getAllProduct,
     updateProductById } = require("../controllers/products");





const productRouter = express.Router();





productRouter.post("/",createNewProduct);
productRouter.get("/",getAllProduct);
productRouter.put("/:id", updateProductById);




module.exports = productRouter;
