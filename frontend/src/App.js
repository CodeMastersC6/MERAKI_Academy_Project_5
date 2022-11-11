import "./App.css";
import { Route, Routes } from "react-router-dom";

// ====== Anas=========//










//====== Asfour=========//
import ProductInfo from "./components/productInfo";
import Cart from "./components/Cart";









//====== Abdullah =========//
import Navigation from "./components/Navbar";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
import About from "./components/About";
// import Payment from "./components/Payment";
import Piganation from "./components/Piganation";
import Payment from "./components/Payment";
import Footer from "./components/Footer";









{/* //====== end =========// line 39*/}
function App() {
  return (

  <div className="App">
  {/* <Navigation /> */}
  <Routes>
  {/* //====== Anas=========// line 46*/}
  <Route path="/payment" element={<Payment></Payment>}></Route>
  <Route path={"/piganation"} element={<Piganation></Piganation>}></Route>
  <Route path={"/"} element={<Login />} />
  <Route path={"/register"} element={<Register />} />
  <Route path={"/about"} element={<About />} />
  <Route path={"/contact"} element={<Contact />} />
  {/* <Route path={"/payment"} element={<Payment />} /> */}
<Route path={"/home"} element={<Home />} />
<Route path={"/cart"} element={<Cart></Cart>} />
<Route path={"/productInfo"} element={<ProductInfo />} />











{/* //====== end =========// line 64*/}
  </Routes>
  <Cart></Cart>
  <Footer></Footer>
  </div>
  )
}

export default App;
