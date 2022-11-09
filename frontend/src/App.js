import "./App.css";
import { Route, Routes } from "react-router-dom";

//====== Anas=========//










//====== Asfour=========//
import ProductInfo from "./components/productInfo";
import Cart from "./components/cart";









//====== Abdullah =========//












function App() {
  return (

  <div className="App">
  {/* <Navigation /> */}
  <Routes>
  {/* //====== Anas=========// */}








{/* //====== Asfour=========// */}

<Route path='/' element={<ProductInfo />}/>
<Route path='/cart' element={<Cart/>}/>







{/* //====== Abdullah =========// */}








  </Routes>

  </div>
  )
}

export default App;
