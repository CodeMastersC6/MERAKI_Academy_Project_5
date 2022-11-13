import "./style.css";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// get all products
// add products
// edit product
// remove product
// created time

// category
// product per category

// cart
// created cart
// total cart value

// users
// delete users
//created time

// payment
// total value
// edit product
// remove product

const Admin = () => {
  const [product, setProduct] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const getAllProducts = () => {
    axios
      .get(`http://localhost:5000/product`)
      .then((result) => {
        setProduct(result.data.result.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllUsers = () => {
    axios
      .get(`http://localhost:5000/users/`)
      .then((result) => {
        console.log(result);
        setUser(result.data.result.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllProducts();
    getAllUsers();
  }, []);

  return (
    <div className="admin_container">
      <div className="dashbord">
        <div
          className="bord"
          onClick={() => {
            navigate("/admin");
          }}
        >
          Dashboard
        </div>
        <div
          className="bord"
          onClick={() => {
            navigate("/admin/products");
          }}
        >
          Products
        </div>
        <div
          className="bord"
          onClick={() => {
            navigate("/admin/products/new");
          }}
        >
          Add New Product{" "}
        </div>
        <div
          className="bord"
          onClick={() => {
            navigate("/admin/users");
          }}
        >
          Users
        </div>
      </div>
      <div className="Admin_Body">
        <div className="cards">
          <div className="card_One">Number of Users {user}</div>
          <div className="card_One"> Number of Products{product}</div>
          <div className="card_One"> Categories 6</div>
          <div className="card_One"> Totla value of Payment</div>
        </div>
        <div className="Tables">
          <div className="Table"></div>
          <div className="Table">Table 2</div>
        </div>
        <div className="Tables">
          <div className="Table">Table1</div>
          <div className="Table">Table 2</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
