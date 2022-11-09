const express = require("express");
const { createNewProduct,
     getAllProduct,
     updateProductById, 
     deleteProductById,
     getProductsByCategory,
getNameProduct,
getFiltrationProduct} = require("../controllers/products");




const productRouter = express.Router();





productRouter.post("/",createNewProduct);
productRouter.get("/",getAllProduct);
productRouter.put("/:id", updateProductById);
productRouter.delete("/:id", deleteProductById);
productRouter.get("/:category", getProductsByCategory);


productRouter.get("/products/:name",getNameProduct);
productRouter.get("/:from/:to",getFiltrationProduct);


module.exports = productRouter;
