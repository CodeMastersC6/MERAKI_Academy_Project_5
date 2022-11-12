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
  const getProductsById = (req, res) => {
    const product_id = req.params.id;
    const data = [product_id];
    const query = `SELECT * FROM products  WHERE is_deleted=0 AND id=$1;`;
    pool.query(query,data)
      .then((result) => {
        res.status(200).json({
          success: true,
          massage: ` products${product_id}`,
          result: result.rows[0],
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
const getProductsByCategory = (req, res) => {
  const category = req.params.category;
  const data = [category];

  const query = `SELECT * FROM products  WHERE is_deleted=0 AND category=$1 ORDER BY 1;`;
  pool.query(query,data)
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

const getNameProduct = async  (req,res)=>{
  const name = req.params.name
  const query = `SELECT * FROM products WHERE name  ~* '${name}' `;
  pool.query(query)
  .then((result)=>{
    if(result.rows.length ===0){
      res.json("Not found product")
    }else{
      res.status(201).json({
        succes:true,
        products:result.rows
       })
    }
  })
  .catch((err)=>{
    console.log(err)
      res.status(400).json({
        succes:false,
        err:err
      })
  })

}
const getFiltrationProduct =(req,res)=>{
  const from = req.params.from
  const to = req.params.to
  const values = [from,to]
  const query= `select  *  from  Products WHERE Price >= $1 AND Price <= $2 `
  pool.query(query,values)
  .then((result)=>{
    if(result.rows.length==0){
      res.json("No product found at this price ")
    }else{
      res.status(201).json({
        success:true,
        products:result.rows

      })
    }
    
  })
  .catch((err)=>{
    res.status(400).json({
      success:false,
      err:err
    })
  })
}
const PaginationAllProduct = (req,res)=>{
  const id = req.params.id
  const values = [id]
  const query = `SELECT * FROM products OFFSET $1 ROWS FETCH NEXT 9 ROWS ONLY`
  pool.query(query,values)
  .then((result)=>{
    if(result.rows.length==0){
      res.json("No product")
    }else{
      res.status(201).json({
        success:true,
        products:result.rows

      })
    }
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).json({
      success:false,
      err:err
    })
  })

}
  module.exports={
    createNewProduct,
    getAllProduct,
    updateProductById,
    deleteProductById,
    getProductsByCategory,
    getNameProduct,
    getFiltrationProduct,
    PaginationAllProduct,
    getProductsById
  };