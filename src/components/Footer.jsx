import React from 'react';
import apple from "../assets/apple.png";
import google1 from '../assets/google1.png';
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1 style={{color:"#303493"}}>ZoodMall</h1><br/><br/>
        <h6>Find us on Social Media</h6>
        <div className="social-media-links">
          <IoLogoYoutube />
          <FaFacebook />
          <FaGoogle />
          <FaTiktok />
          <FaTelegram />

        </div>
        <h3>Download our mobile app</h3>
        <div className="app-store-logos">
          <img src={apple} alt="Apple App Store" />
           <img src={google1} alt="Google Play Store" />
        </div>
      </div>
      <div className="footer-right">

        <div style={{display:"flex"}}>
        <div className="footer-links" style={{paddingRight:"50px"}} >
          <h3>About Us</h3>
          <a href="#">User Agreement</a>
          <a href="#">Privacy and Personal Data Protection Policy</a>
          <a href="#">Return & Refund Policy</a>
          <a href="#">Sell on Zood</a>
          <a href="#">Careers</a>
          <a href="#">CONTACT</a>
        </div>
        <div className="footer-contact">
          <h3>Have any question?</h3>
          <p>Email: support@zood.com</p>
          <p>Phone: +1234567890</p>
        </div>

        </div>
        
     
      </div>
     
    </footer>
   
  );    
};

export default Footer;
