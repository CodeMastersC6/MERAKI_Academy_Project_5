import "./style.css"
import Footer from "../Footer"
import Navbar_b_token from "../Navbar_b_token/indes"
const About = ()=>{
    return (
        <div>
        <Navbar_b_token/>
        <div className="main_div_about">

        <div className="about_main">
            <h1>What We Do?</h1>
            <p className="p_first"> Dokaneh is an Amman based super app with operations in Jordan, covering 12 cities across the kingdom regions for buying the necessary products and groceries for every home.</p>
            <img src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/cat9.jpg?v=1613778270"></img>
           
        </div>
        <div className="div_ul">
        <ul>
            
            <li>It is the site for buying the necessary products for every home.</li>
            <br/>
            <li>In a fast, simple and safe way.</li>
            <br/>
            <li>To facilitate the purchase process and reduce the time , we designed this site.</li>
            <br/>
            <li>Payment operations are easy and safe.</li>
        
        </ul>
        </div>






        </div>

        {/* <Footer/> */}

        </div>
    )
}

export default About