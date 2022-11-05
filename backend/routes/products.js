const express = require("express");
const { createNewProduct,
     getAllProduct,
     updateProductById, 
     deleteProductById} = require("../controllers/products");





const productRouter = express.Router();





productRouter.post("/",createNewProduct);
productRouter.get("/",getAllProduct);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deleteProductById);




module.exports = productRouter;
