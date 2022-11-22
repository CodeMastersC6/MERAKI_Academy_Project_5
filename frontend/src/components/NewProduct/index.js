import "./style.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState(0);
  const [productType, setProductType] = useState();
  const [productPrice, setProductPrice] = useState(false);
  const [productDescription, setProductDescription] = useState();
  const [productStatus, setProductStatus] = useState();
  const [productImage, setProductImage] = useState();
  let newProductImage;
  let newProductName;
  let newProductType;
  let newProductPrice;
  let newProductDescription;
  let newProductStatus;

  const selectFunction = (value) => {};

  const createNewProduct = () => {
    axios
      .post("http://localhost:5000/product", {
        name: productName,
        category: productType,
        price: productPrice,
        description: productDescription,
        image: productImage,
      })
      .then((response) => {
        console.log(response.data.massage);
        newProductStatus = response.data.message;
        setProductStatus(newProductStatus);
      })

      .catch((err) => {
        newProductStatus = err.response.data.message;
        setProductStatus(newProductStatus);
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
        <div className="createProductContainer">
          <div className="createProductDiv">
            <input className="new_item_input"
              placeholder="Product Name ? "
              onChange={(e) => {
                newProductName = e.target.value;
                setProductName(newProductName);
              }}
            ></input>
          </div>

          <div className="createProductDiv">
            <input className="new_item_input"
              placeholder="Product Descritption"
              onChange={(e) => {
                newProductDescription = e.target.value;
                setProductDescription(newProductDescription);
              }}
            ></input>
          </div>

          <div className="createProductDiv">
            <input className="new_item_input"
              placeholder="Price"
              type={"number"}
              onChange={(e) => {
                newProductPrice = e.target.value;
                setProductPrice(newProductPrice);
              }}
            ></input>
          </div>

          <div className="createProductDiv">
            <select className="new_item_input"
              onChange={(e) => {
                newProductType = e.target.value;
                setProductType(newProductType);
                console.log(newProductType);
              }}
            >
              <option>Meat</option>
              <option>Bread</option>
              <option>Yougart</option>
              <option>Fruits</option>
              <option>Vigtables</option>
              <option>Juice</option>
            </select>
          </div>

          <div className="createProductDiv_2">
            <p>Product Image </p><input 
              type="file"
              onChange={(e) => {
                convertToBase64(e.target.files[0]);
              }}
            ></input>
          </div>

          <div className="createProductDiv_3">
            <button
              className="createButton"
              onClick={() => {
                createNewProduct();
                navigate("/admin/products");
              }}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>

      <div>
        <p>{productStatus}</p>
      </div>
    </div>
  );
};
export default NewProduct;
