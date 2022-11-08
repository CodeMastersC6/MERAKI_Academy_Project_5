import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import axios from "axios";

// import { AuthContext } from "../../contexts/authContext";
//===============================================================

const Home = () => {
  // const { token, userId } = useContext(AuthContext);
  const [products, setProducts] = useState([{name:"Meat", image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=", price:15},{name:"Meat", image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=", price:15},{name:"Meat", image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=", price:15},{name:"Meat", image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=", price:15},{name:"Meat", image:"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=", price:15}]);
  const [category, setCategory] = useState(["All","Meat","Bread", "Yougart", "Fruits", "Vigtables", "Juice"])
  //===============================================================
  // const getAllProducts = async () => {
  //   try {
  //     const result = await axios.get("http://localhost:5000/product", {
  //     });
  //     if (result.data.success) {
  //       console.log("yes")

  //       setProducts(result.data.result);
  //       setMessage("");
  //     } else throw Error;
  //   } catch (error) {
  //     if (!error.response.data.success) {
  //       console.log("No")
        
  //       return setMessage(error.response.data.message);
  //     }
  //     setMessage("Error happened while Get Data, please try again");
  //   }
  // };

  //===============================================================

  // const handleUpdateClick = (article) => {
  //   setUpdateBox(!updateBox);
  //   setArticleId(article.id);
  //   setTitle(article.title);
  //   setDescription(article.description);
  //   if (updateBox) updateArticle(article.id);
  // };

  //===============================================================

  // useEffect(() => {
  //   getAllProducts();
  //  },[]);

  //===============================================================

  return (
           <>
           <div className="categorys">
      {category?.map((category, index) => (
        <div key={index} className="category">
          <Link className="category" to="">
              {category}
            </Link>
            </div>
               
      ))} 
      </div>
      <div className="container">
        <div className="filterbar"> Filterbar</div>  
         <div className="products">
      {products?.map((product, index) => (
        <div key={index} className="product">
          <div>
          <img className="product_image" src={product.image}/>
            </div>
            <div className="product_details">
          <div className="details_component">{product.name}</div>
          <div className="details_component">{product.price}</div>
          <div>
          <button> Wishlist</button>
          <button> Cart</button>
          <button>View</button>
          </div>
          </div>
                 </div>
               
      ))} 
      </div>
      </div>
   
 </>
  );
};

export default Home;
