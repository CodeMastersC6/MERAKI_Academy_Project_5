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
// const authentication = require("../middlewares/authentication");
// const authorization = require("../middlewares/authorization");

cartRouter.get("/", getAllCarts), // authentication
cartRouter.get("/search_1", getCartsByUser);

cartRouter.post("/",createNewCart); //need authentication,authorization("CREATE_CART") once its done 
cartRouter.put("/:id", updateCartById);

cartRouter.delete("/:id", deleteCartById);

module.exports = cartRouter;
