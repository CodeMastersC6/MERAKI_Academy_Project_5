const express = require("express");
//controllers
const {
  getAllCarts,
  getCartsByUser,
  createNewCart,
  updateCartById,
  deleteCartById,
} = require("../controllers/cart");

const cartRouter = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

cartRouter.get("/",authentication,authorization("read"), getAllCarts), // 
cartRouter.get("/:userId", getCartsByUser);

cartRouter.post("/",createNewCart); //need authentication,authorization("CREATE_CART") once its done 
cartRouter.put("/:id", updateCartById);

cartRouter.delete("/:id", deleteCartById);

module.exports = cartRouter;
