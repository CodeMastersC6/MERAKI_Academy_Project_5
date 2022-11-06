const express = require("express");
// import function register from controllers
const { register } = require("../controllers/register");

const registerRouter = express.Router();

registerRouter.post("/", register);

module.exports = registerRouter;