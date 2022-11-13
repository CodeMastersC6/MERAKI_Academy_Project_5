const express = require("express");
//controllers
const {
  getAllUserss,
  deleteUser,

} = require("../controllers/users");

const userRouter = express.Router();

userRouter.get("/", getAllUserss);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
