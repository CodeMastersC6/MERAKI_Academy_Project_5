import "./App.css";
import { Route, Routes } from "react-router-dom";

// ====== Anas=========//










//====== Asfour=========//
import ProductInfo from "./components/productInfo";
import Cart from "./components/cart";









//====== Abdullah =========//
import Navigation from "./components/Navbar";
import Home from "./components/Home"









{/* //====== end =========// line 39*/}
function App() {
  return (

  <div className="App">
  <Navigation />
  <Routes>
  {/* //====== Anas=========// line 46*/}








{/* //====== Asfour=========// line 55 */}

<Route path='/' element={<ProductInfo />}/>
<Route path='/cart' element={<Cart/>}/>







{/* //====== Abdullah =========// line 64*/}
<Route path={"/"} element={<Home />} />






{/* //====== end =========// line 64*/}
  </Routes>

  </div>
  )
}

export default App;
