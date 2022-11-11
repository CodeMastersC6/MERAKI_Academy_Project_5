import "./App.css";
import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Cart from "./components/cart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navbar";
import Payment from "./components/Payment";
import Piganation from "./components/Piganation";
import ProductInfo from "./components/productInfo";
import Register from "./components/Register";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
        <Route path={"/home"} element={<Home/>}/>
        <Route path={"/"} element={<Login/>}/>
        <Route path={"/payment"} element={<Payment/>}/>
        <Route path={"/piganation"} element={<Piganation/>}/>
        <Route path={"/productInfo"} element={<ProductInfo/>}/>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/admin"} element={<Admin/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
