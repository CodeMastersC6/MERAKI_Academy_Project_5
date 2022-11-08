
import "./style.css"
const Navbar = ()=>{
    const currentURL = window.location.href 
    console.log(currentURL)
    return (
        <div class="topnav">
            <div className="Black">
               <span className="text_insideBlack"><span className="Free_shopping"> Free Shipping</span>  
                 Orders From All item</span>
               </div>
 

  <img className="image_icons" src="https://cdn-icons-png.flaticon.com/512/135/135763.png"></img>
  <a href="#news"  className={currentURL=="http://localhost:3000/products/add#news"&&"active"} onClick={()=>{
    // navigate("/products/add")
    // setActive(!isActive)
  }}>Login</a>
  <a href="#contact"  className={currentURL=="http://localhost:3000/products#contact"&&"active"} onClick={()=>{
    // navigate("/products")
    // toggleClass(true)

  }}>Sign Up</a>
  <img className="img_main" src="https://www.veic.org/Media/Default/images/case-studies/healthy-living/HealthyLiving_1800x1013_01.jpg?width=1800"></img>
  
</div>
    )
}

export default Navbar