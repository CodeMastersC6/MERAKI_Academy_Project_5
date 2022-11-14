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

const Users = () => {
  const [updateClick, setUpdateClick] = useState(false);
  const [newName, setNewName] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newPrice, setNewprice] = useState();
  const [newType, setNewType] = useState();
  const [newMealItem, setNewMealItem] = useState();
  const [elemId, setElemID] = useState();

  let newMeal="";
  let newtypeValue="";
  let newPriceValue="";
  let newDescriptionValue="";
  let newNameValue="";
  let newQuantity="";
  let NewMealItem="";

  const [productList, setProductList] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const getAllProducts = () => {
    axios
      .get(`http://localhost:5000/users`)
      .then((result) => {
        console.log(result);
        setProductList(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = (str) => {
    axios
      .delete(`http://localhost:5000/users/${str}`)
      .then((result) => {
        if (result.data.success) {
          let newProductList = productList.filter((element) => {
            return element.id != str;
          });
          setProductList(newProductList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProduct = (value) => {
    axios
      .put(`http://localhost:5000/users/${value}`, {
        name: newName,
        description: newDescription,
        price: newPrice,
        category: newType,
      })
      .then((response) => {
        if (response.data.success) {
          let newProductList = productList.map((element,i) => {
            console.log(newMealItem)
            if (element.id === value) {
            element.name=newName|| newMealItem.name 
            element.description= newDescription|| newMealItem.description
            element.price=newPrice || newMealItem.price
            element.category=newType || newMealItem.category}
          return element
             
          });
          setProductList(newProductList);
       
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
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
        {productList &&
          productList.map((element, i) => {
            return (
              <>
                <div className="product_Details">
                <div>
                    <p>ID:{element.id}</p>
                 </div>
                  <div>
                    <p>First Name:{element.firstname}</p>
                 </div>

                  <div>
                    <p>Last Name:{element.lastname}</p>
                  </div>
                  <div>
                    <p>Email:{element.email}</p>
                     </div>
                  <div>
                  <div>
                    <p>Mobile:{element.mobile}</p>
                     </div>
                  <div>
                    <p>Location:{element.location}</p>
                      </div>
                  <div>
                    <button
                      onClick={() => {
                        deleteProduct(element.id);
                      }}
                    >
                      Delete
                    </button>
                   
                  </div>
                  </div>
                  </div>

   
              </>
            );
          })}
          </div>
          </div>
  );
};

export default Users;
