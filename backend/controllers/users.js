const {pool} = require("../models/db");
const getAllUserss = (req, res) => {
  const query = `SELECT * FROM users WHERE is_deleted=0;`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        success: true,
        massage: "All the Carts",
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



//

const deleteUser = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE users SET is_deleted=1 WHERE id=$1 RETURNING *;`;
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
  getAllUserss,
  deleteUser

};
