import "./style.css";
import React, { useState,  } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
const navigate=useNavigate()
  const [productName, setProductName] = useState(0);
  const [productType, setProductType] = useState();
  const [productPrice, setProductPrice] = useState(false);
  const [productDescription, setProductDescription] = useState();
  const [newProductStatus, setNewProductStatus] = useState();
  const [productImage, setProductImage] = useState();
  let newProductImage;
  let newProductName;
  let newProductType;
  let newProductPrice;
  let newProductDescription;
  let newNewProductStatus;

  const selectFunction = (value) => {

  };

  const createNewProduct = () => {
    axios
      .post(
        "http://localhost:5000/product",
        {
          name: productName,
          type: productType,
          price: productPrice,
          description: productDescription,
          image: productImage,
        }
      )
      .then((response) => {
        newNewProductStatus = response.data.message;
        setNewProductStatus(newNewProductStatus);
      })

      .catch((err) => {
        newNewProductStatus = err.response.data.message;
        setNewProductStatus(newNewProductStatus);
      });
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
        newProductImage = fileReader.result;
        setProductImage(newProductImage);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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
      <div className="Master">
      <div className="createProductContainer">
        <div className="createProductDiv">
          <div className="mainDiv">
            <p>Product Name:</p>
          </div>
          <div>
            <input
              placeholder="Product Name ? "
              onChange={(e) => {
                newProductName = e.target.value;
                setProductName(newProductName);
              }}
            ></input>
          </div>
        </div>
        <div className="createProductDiv">
          <div className="mainDiv">
            <p>Description:</p>
          </div>
          <div>
            <input
              placeholder="Product Descritption"
              onChange={(e) => {
                newProductDescription = e.target.value;
                setProductDescription(newProductDescription);
              }}
            ></input>
          </div>
        </div>
        <div className="createProductDiv">
          <div className="mainDiv">
            <p>Price:</p>
          </div>
          <div>
            <input
              placeholder="Price"
              type={"number"}
              onChange={(e) => {
                newProductPrice = e.target.value;
                setProductPrice(newProductPrice);
              }}
            ></input>
          </div>
        </div>
        <div className="createProductDiv">
          <div className="mainDiv">
            <p>Product Category:</p>
          </div>
          <div>
            <select
              onChange={(e) => {
                selectFunction(e.target.value);
              }}
            >
              <option>Meat</option>
              <option>Bread</option>
              <option>Yougart</option>
            </select>
          </div> 
          <div className="mainDiv">
            <p>Product Image:</p>
          </div>
          <div>
        <input
          type="file"
          onChange={(e) => {
            convertToBase64(e.target.files[0]);
          }}
        ></input>
        </div>
      </div>
      </div>
     
      <div>
        <button
          className="createButton"
          onClick={() => {
            createNewProduct();
          }}
        >
          Add Product
        </button>
      </div>
      <p>{newProductStatus}</p>
    </div>
      </div>
    </div>
    
  );
};
export default NewProduct;