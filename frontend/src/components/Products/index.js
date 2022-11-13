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
  const [productList, setProductList] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const getAllProducts = () => {
    axios
      .get(`http://localhost:5000/product`)
      .then((result) => {
        console.log(result)
        setProductList(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const updateProduct = (str) => {
  //   axios
  //     .get(`http://localhost:5000/product/${str}`,{

  //     })
  //     .then((result) => {
  //       if (result.data.success) {
  //       let  newProductList2 = productList.filter((element) => {
  //           return element.id != str;
  //         });
  //         setProductList(newProductList2);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const updateCart = (value) => {
  //   axios
  //     .put(
  //       `http://localhost:5000/product/${value}`,
  //       {
  //         name: newQuantity || value.quantity,
  //         total: newQuantity * value.price || value.total,
  //       },
  //       { headers: { authorization: "Bearer " + token } }
  //     )
  //     .then((response) => {
  //       if (response.data.success) {
  //         newCartList = cartList.map((element) => {
  //           if (element._id == value._id) {
  //             element.quantity = newQuantity;
  //             element.total = newQuantity * element.price;
  //           }
  //           return element;
  //         });
  //         setCartList(newCartList);
  //         setCartListStatus(response.data.success);
  //       }
  //     })

  //     .catch((err) => {
  //       console.log(err.response.data.success);

  //       setCartListStatus(err.response.data.success);
  //     });
  // };








  const deleteProduct = (str) => {
    axios
      .delete(`http://localhost:5000/product/${str}`)
      .then((result) => {
        if (result.data.success) {
        let  newProductList = productList.filter((element) => {
            return element.id != str;
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
      {productList&&productList.map((elem, i) => {
    return ( 
      <>
      <div className="product_component">
      <p className="nameCart">{elem.image}</p>
      <p className="nameCart">{elem.name}</p>
      <p className="nameCart">{elem.category}</p>
      <p className="nameCart">{elem.discription}</p>
      <p className="nameCart">{elem.price}</p>
      <button onClick={() => {
                deleteProduct(elem.id)            
               }}>Delete</button>
      <button>Update</button>
      </div>
      </>
     )})}

   
      </div>
    </div>
  );
};

export default Products;



