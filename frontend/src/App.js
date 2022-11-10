import "./App.css";
import { Route, Routes } from "react-router-dom";

// ====== Anas=========//










//====== Asfour=========//
import ProductInfo from "./components/productInfo";
import Cart from "./components/cart";









//====== Abdullah =========//
import Navigation from "./components/Navbar";
import Home from "./components/Home"
import Login from "./components/Login";
import Register from "./components/Register";
import Contact from "./components/Contact";
import About from "./components/About";
// import Payment from "./components/Payment";
import Piganation from "./components/Piganation";









{/* //====== end =========// line 39*/}
function App() {
  return (

  <div className="App">
  <Navigation />
  <Routes>
  {/* //====== Anas=========// line 46*/}
  <Route path={"/piganation"} element={<Piganation></Piganation>}></Route>
  <Route path={"/"} element={<Login />} />
  <Route path={"/register"} element={<Register />} />
  <Route path={"/about"} element={<About />} />
  <Route path={"/contact"} element={<Contact />} />
  {/* <Route path={"/payment"} element={<Payment />} /> */}
<Route path={"/home"} element={<Home />} />











{/* //====== end =========// line 64*/}
  </Routes>

  </div>
  )
}

export default App;
