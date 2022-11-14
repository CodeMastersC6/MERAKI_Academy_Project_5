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

const Products = () => {
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
      .get(`http://localhost:5000/product`)
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
      .delete(`http://localhost:5000/product/${str}`)
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
      .put(`http://localhost:5000/product/${value}`, {
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
                    <img className="admin_product_image" src={element.image}/>
                 
                  </div>
                  <div>
                    <p>Name:{element.name}</p>
                    {element.id === elemId ? (
                      updateClick && (
                        <input
                          onChange={(e) => {
                            newNameValue = e.target.value;
                            setNewName(newNameValue);
                          }}
                        ></input>
                      )
                    ) : (
                      <></>
                    )}
                  </div>

                  <div>
                    <p>Description:{element.description}</p>
                    {element.id === elemId ? (
                      updateClick && (
                        <input
                          onChange={(e) => {
                            newDescriptionValue = e.target.value;
                            setNewDescription(newDescriptionValue);
                          }}
                        ></input>
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <p>Category:{element.category}</p>
                    {element.id === elemId ? (
                      updateClick && (
                      
<select
              onChange={(e) => {
                newtypeValue = e.target.value;
                setNewType(newtypeValue);
              }}
            >
              <option>Meat</option>
              <option>Bread</option>
              <option>Yougart</option> 
              <option>Fruits</option> 
              <option>Vigtables</option>
              <option>Juice</option>
            </select>


                      )
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <p>Price:{element.price}</p>
                    {element.id === elemId ? (
                      updateClick && (
                        <input
                          onChange={(e) => {
                            newtypeValue = e.target.value;
                            setNewprice(newtypeValue);
                          }}
                        ></input>
                      )
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        deleteProduct(element.id);
                      }}
                    >
                      Delete
                    </button>
                    {!updateClick ? (
                      <button
                        onClick={() => {
                          setElemID(element.id)
                          setUpdateClick(true)
                          NewMealItem=element
                          setNewMealItem(NewMealItem)
                        }}
                      >
                        Update
                      </button>
                    ) : (
                      element.id === elemId && (
                        <button
                          onClick={() => {
                            updateProduct(element.id)
                            setUpdateClick(false)
                            setNewDescription()
                            setNewName()
                            setNewprice()
                            setNewType()
                            setNewMealItem()

                          }}
                        >
                          Change
                        </button>
                      )
                    )}
                  </div>
                </div>

   
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
