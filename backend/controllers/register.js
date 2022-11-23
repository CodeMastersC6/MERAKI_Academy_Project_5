const {pool} =require("../models/db")
//create variable "bcrybt" for hash password
const bcrypt = require("bcrypt")
const saltRounds = parseInt(process.env.SALT||10);


// create variable "register" that create new user
const register = async (req, res) => {
    const { firstName, lastName, Location, mobile, email, password, role_id } =
      req.body;

  //create variable "encryptedPassword" for hash password
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
   //create variable "data"that represent array and contain all req.body
    const data = [
      firstName,
      lastName,
      Location,
      mobile,
      email.toLowerCase(),
      encryptedPassword,
      role_id,
    ];
    const query = `INSERT INTO users (firstName, lastName, Location, mobile, email, password, role_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`;
    
    pool
      .query(query, data)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: "Account Created Successfully",
          result:result.rows
        });
      })
      .catch((err) => {
        res.status(409).json({
          success: false,
          massage: "The email already exists",
          err,
        });
      });
  };
  
  module.exports = {
    register,
  };
  