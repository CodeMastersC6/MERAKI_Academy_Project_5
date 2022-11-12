import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProductId, setProducts } from "../../redux/reducer/product";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
//===============================================================

const Home = () => {
  const { products } = useSelector((state) => {
    return {
      products: state.product.products,
    };
  });
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [max, setMax] = useState(100);
  const [min, setMin] = useState(0);
  const category = ["meat", "bread", "Yougart", "Fruits", "Vigtables", "Juice"];
  //===============================================================
  const getAllProducts = () => {
    axios
      .get(`http://localhost:5000/product/page/${count}`)
      .then((result) => {
        dispatch(setProducts(result.data.products));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllProductByCategory = (str) => {
    axios
      .get(`http://localhost:5000/product/category/${str}`)
      .then((result) => {
        setMessage("Success");
        dispatch(setProducts(result.data.result));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllProductBySearch = (str) => {
    axios
      .get(`http://localhost:5000/product/${min}/${max}`)
      .then((result) => {
        setMessage("Success");
        dispatch(setProducts(result.data.products));
      })
      .catch((err) => {
        setMessage(err);
      });
  };

  //===============================================================

  useEffect(() => {
    getAllProducts();
  }, [count]);

  useEffect(() => {
    getAllProductBySearch();
  }, [min, max]);

  //===============================================================

  return (
    <>
      <div className="categorys">
        <div
          className="category"
          onClick={(e) => {
            getAllProducts();
          }}
        >
          <p>All</p>
        </div>
        {category?.map((category, index) => (
          <div key={index} className="category">
            <div
              className="category"
              onClick={(e) => {
                getAllProductByCategory(e.target.innerHTML);
              }}
            >
              <p>{category}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="filterbar">
          <p>Price Range</p>
          <p>From</p>
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="100"
            placeholder="here"
            value={min}
            onChange={(e) => {
              setMin(e.target.value);
            }}
          ></input>
          <p>{min}</p>
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="100"
            placeholder="here"
            value={max}
            onChange={(e) => {
              setMax(e.target.value);
            }}
          ></input>
          <p>{max}</p>
        </div>
        <div className="products">
          {products?.map((product, index) => (
            <div
              key={index}
              className="product"
              onClick={() => {
                dispatch(setProductId(product.id));
                navigate("/productInfo");
              }}
            >
              <div>
                <img className="product_image" src={product.image} />
              </div>
              <div className="product_details">
                <div className="details_component">{product.name}</div>
                <div className="details_component">{product.price}</div>
                <div>
                  <button> Cart</button>
                  <button>View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="div_move">
        <button
          className="but_11"
          onClick={() => {
            setCount(count - 12);
          }}
        >
          <AiFillLeftCircle></AiFillLeftCircle>
        </button>
        <button
          className="but_22"
          onClick={() => {
            setCount(count + 12);
          }}
        >
          <AiFillRightCircle></AiFillRightCircle>
        </button>
      </div>
    </>
  );
};

export default Home;
