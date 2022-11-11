import React from "react";
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaSnapchat} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaCcVisa} from 'react-icons/fa'
import {SiMastercard} from 'react-icons/si'
import {SlPaypal} from 'react-icons/sl'
import{CiDeliveryTruck} from 'react-icons/ci'
import{BsCashCoin} from 'react-icons/bs'
import{HiOutlineStatusOnline} from 'react-icons/hi'
import { useNavigate } from "react-router-dom";
import "./style.css"
const Footer = () => {
  const navigate =useNavigate()

    return (
        <React.Fragment>
          
        <div className="about_register">
            <p><img className="about_register1" src="https://cdn-icons-png.flaticon.com/512/2833/2833318.png"></img><span className="span_about">Free Delivery</span></p>
            <p ><img className="about_register1" src="https://m.economictimes.com/thumb/msid-83058184,width-1200,height-900,resizemode-4,imgsize-47252/cod-istock.jpg"></img><span className="span_about">Cash On Delivery</span></p>
            <p><img  className="about_register1"src="https://cdn-icons-png.flaticon.com/512/1304/1304032.png"></img><span className="span_about">Online Support</span></p>
        </div>
        <div className="about_register2">
            <p><img className="about_register4" src="https://cdn-icons-png.flaticon.com/512/135/135763.png"></img><span className="span_about1">Lorem Ipsum, You Need To Be Amet EmbarrassingPassage </span></p>
            <p ><img className="about_register4" src="https://cdn-icons-png.flaticon.com/512/17/17736.png"></img><span className="span_about1">38 block street arean licard
hamonia road sydney, Jordanian</span></p>
            <p><img  className="about_register4"src="https://cdn0.iconfinder.com/data/icons/basic-uses-symbol-vol-1/100/Call_Phone_Cell_Ring_Pick_up-512.png"></img><span className="span_about1">(+800) 1234 5678 90
support@veginafood.com</span></p>
        </div>


      <footer className="footer">
    <p className="copyright">

    Copyright @ 2022 spacingtech all rights reserved
    </p>
    <div className="facebook_icons">
        <BsWhatsapp></BsWhatsapp>
        <AiFillFacebook></AiFillFacebook>
        <AiOutlineTwitter></AiOutlineTwitter>
        <FaSnapchat></FaSnapchat>
        <AiFillInstagram></AiFillInstagram>
    </div>
    <div className="master_card">
<FaCcVisa></FaCcVisa>
<SiMastercard></SiMastercard>
<SlPaypal></SlPaypal>
</div>
  </footer>
  </React.Fragment>
  );
};
export default Footer;