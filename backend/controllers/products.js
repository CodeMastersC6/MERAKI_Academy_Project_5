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
//create function updateProductById
  const updateProductById = (req, res) => {
    const id = req.params.id;
    let { category , name , price ,image,description } = req.body;
  
    const query = `UPDATE products SET category = COALESCE($1,category),
    name = COALESCE($2, name),
    price = COALESCE($3,price),
    image = COALESCE($4,image),
    description = COALESCE($5,description) WHERE id=$6 AND is_deleted = 0  RETURNING *;`;
    const data = [category || null, 
        name || null,
        price || null,
        image || null,
        description || null, id];
    pool.query(query, data)
      .then((result) => {
        if (result.rows.length === 0) {
          return res.status(404).json({
            success: false,
            massage: `The products: ${id} is not found`,
          });
        } else {
          res.status(200).json({
            success: true,
            massage: `Succeeded to updated products with id: ${id}`,
            result: result.rows[0],
          });
        }
      })
      .catch((err) => {
        console.log(err.massage);
        res.status(500).json({
          success: false,
          massage: "Server Error",
          err: err,
        });
      });
  };
  //create function deleteProductById
  const deleteProductById = (req, res) => {
    const id = req.params.id;
    const query = `UPDATE products SET is_deleted=1 WHERE id=$1;`;
    const data = [id];
    pool
      .query(query, data)
      .then((result) => {
        if (result.rowCount === 0) {
          res.status(404).json({
            success: false,
            massage: `The products: ${id} is not found`,
            err: err,
          });
        } else {
          res.status(200).json({
            success: true,
            massage: `Succeeded to delete products with id: ${id}`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          massage: "Server Error",
          err: err,
        });
      });
  };


















  module.exports={
    createNewProduct,
    getAllProduct,
    updateProductById,
    deleteProductById
  };