import "./style.css"
import { useEffect,useState } from "react";
import {ImAddressBook} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import Footer from "../Footer"
import Navbar_b_token from "../Navbar_b_token/indes"
const Contact = ()=>{
   
   
    return(
        <div>
        <Navbar_b_token/>

            <div className="parent_contect">
         <h1>Contact Us</h1>
         <p>Got a question? We had love to hear from you. Send us a message and we will respond as soon as possible.</p>
         <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11384.405945034187!2d35.88703753772701!3d31.971634464435528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b73a8d911dbeb%3A0x51861240a8b1b14b!2sBustanji%20Motors!5e0!3m2!1sar!2sjo!4v1665097705271!5m2!1sar!2sjo"
  
            ></iframe>
            </div>
            <div className="tow_contect">
            <div className="contact_left">
                
                <h1>Drop us message</h1>
                <label>Name</label>
                <input placeholder="Enter your name"></input>
                <label>Email</label>
                <input placeholder="Enter your email address*"></input>
                <label>Message</label>
                <textarea placeholder="Your message here"></textarea>
                <button>Submit</button>
            </div>
            <div className="Contact_right">
                <h1>Get in Touch</h1>
                <p className="contect_P">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum earum eveniet dolorum suscipit nesciunt incidunt animi repudiandae ab at, tenetur distinctio voluptate vel illo similique.</p>
                <div>
                 <ImAddressBook></ImAddressBook>
                <h2>Address</h2>
                <h4>255 Parker St. Englishtown, NJ 07726</h4>
                </div>
                <div>
                 <BsFillTelephoneFill></BsFillTelephoneFill>
                <h2>Phone</h2>
                <h4>+1234568999</h4>
                </div>
                <div>
                <AiOutlineMail></AiOutlineMail>
                <h2>Email</h2>
                <h4>yoursite@demo.com</h4>
                </div>

            </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Contact