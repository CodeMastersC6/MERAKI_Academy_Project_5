const express = require("express");
const { createNewProduct,
     getAllProduct,
     updateProductById, 
     deleteProductById,
     getProductsByCategory} = require("../controllers/products");




const productRouter = express.Router();





productRouter.post("/",createNewProduct);
productRouter.get("/",getAllProduct);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deleteProductById);
productRouter.get("/:category", getProductsByCategory);



module.exports = productRouter;
