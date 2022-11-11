
import "./style.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Navbar_b_token = ()=>{
const navigate=useNavigate()
useEffect(()=>{
  const currentURL = window.location.href 
  console.log(currentURL)
},[])
  const currentURL = window.location.href 
    console.log(currentURL)
    return (
        <div class="topnav">
            <div className="Black">
               <span className="text_insideBlack"><span className="Free_shopping"> Free Shipping</span>  
                 Orders From All item</span>
               </div>
 

  <img className="image_icons" src="https://cdn-icons-png.flaticon.com/512/135/135763.png"></img>
  <p className="p_logo">docana</p>
  
  
      
  <a  className={currentURL=="http://localhost:3000/" &&"active"}onClick={()=>{
    navigate("/")
  
  }}>Login</a>
  <a  className={currentURL=="http://localhost:3000/register" &&"active"} onClick={()=>{
    navigate("/register")

  }}>Sign Up</a>
  <a className={currentURL=="http://localhost:3000/contact" &&"active"} onClick={()=>{
    navigate("/contact")
  
  }}>Contact Us</a>
      <a  className={currentURL=="http://localhost:3000/about" &&"active"} onClick={()=>{
    navigate("/about")
  
  }}>About Us</a>
  <img className="img_main" src="https://www.veic.org/Media/Default/images/case-studies/healthy-living/HealthyLiving_1800x1013_01.jpg?width=1800"></img>
  
</div>
    )
}

export default Navbar_b_token