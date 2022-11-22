const {pool} = require("../models/db");
const getAllCarts = (req, res) => {
  const query = `SELECT * FROM cart INNER JOIN products ON products.id=cart.product_id INNER JOIN users ON users.id=cart.user_id WHERE cart.is_deleted=0;`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        massage: "All the Carts",
        result: result.rows,
        // userId: req.token.userId,    /* from token*/
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

const getCartsByUser = (req, res) => {
  const user_id = req.params.userId; /* from token */
  const query =  `SELECT *,cart.id AS cid FROM cart INNER JOIN products ON products.id=cart.product_id INNER JOIN users ON users.id=cart.user_id WHERE cart.user_id = $1 AND cart.is_deleted=0;`
  const data = [user_id];

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({
          success: false,
          massage: `The user: ${user_id} has no carts`,
        });
      } else {
        res.status(200).json({
          success: true,
          massage: `All the carts for the user: ${user_id}`,
          result: result.rows,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    });
};

const createNewCart = (req, res) => {
  const { product_id, notes,quantity,created_at } = req.body;
  // const user_id = req.token.userId;
  const {user_id} = req.body; /*for test only*/ 

  const query = `INSERT INTO cart (product_id, notes,quantity,created_at,user_id) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;
  const data = [product_id, notes,quantity,created_at,user_id];
  pool
    .query(query, data)
    .then((result) => {
      res.status(200).json({
        success: true,
        massage: "Cart created",
        result: result.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    });
};

const updateCartById = (req, res) => {
  const id = req.params.id;  
  let { notes,quantity } = req.body;

  const query = `UPDATE cart SET notes = COALESCE($1,notes), quantity = COALESCE($2, quantity) WHERE cart.id = $3 AND is_deleted = 0  RETURNING *;`;
  const data = [notes || null, quantity || null, id];
  pool
    .query(query, data)
    .then((result) => {
        res.status(200).json({
          success: true,
          massage: `Succeeded to updated Cart with id: ${id}`,
          result: result.rows[0],
        });
     
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    });
};
//

const deleteCartById = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE cart SET is_deleted=1 WHERE id=$1 RETURNING *;`;
  const data = [id];
  pool
    .query(query, data)
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).json({
          success: false,
          massage: `The cart: ${id} is not found`,
          err: err,
        });
      } else {
        res.status(200).json({
          success: true,
          massage: `Succeeded to delete cart with id: ${id}`,
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



module.exports = {
  getAllCarts,
  getCartsByUser,
  createNewCart,
  updateCartById,
  deleteCartById,

};
