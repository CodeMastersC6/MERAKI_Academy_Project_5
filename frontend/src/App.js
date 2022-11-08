import "./App.css";
import { Route, Routes } from "react-router-dom";

// ====== Anas=========//










//====== Asfour=========//











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








{/* //====== Abdullah =========// line 64*/}
<Route path={"/"} element={<Home />} />






{/* //====== end =========// line 64*/}
  </Routes>

  </div>
  )
}

export default App;
