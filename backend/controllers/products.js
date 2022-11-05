const {pool}= require("../models/db");



//create function  createNewProduct
const createNewProduct = (req, res) => {
    const { category , name , price ,image,description } = req.body;
    const query = `INSERT INTO products (category , name , price ,image,description) VALUES ($1,$2,$3,$4,$5) RETURNING *`;
    const data = [category , name , price ,image,description];
    pool.query(query, data)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: "products created",
          result: result.rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "Server error",
          err: err.massage,
        });
      });
  };

//create function getAllProduct
  const getAllProduct = (req, res) => {
    const query = `SELECT * FROM products  WHERE is_deleted=0 ORDER BY 1;`;
    pool.query(query)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: "All the products",
          result: result.rows,
         
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      });
  };



















  module.exports={
    createNewProduct,
    getAllProduct
  };