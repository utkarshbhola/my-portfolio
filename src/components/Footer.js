import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <p>Need help with professional support? Let’s work together!</p>
      <div className="contact-info">
        <p>Email: utkarsh.bhola31@gmail.com</p>
        <p>Location: Noida, India</p>
        <a href="https://www.linkedin.com/in/utkarsh-bhola-639081172/" target="_blank">
        <FaLinkedin />
        </a>
        <a href="https://github.com/utkarshbhola" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  
  );
};

export default Footer;
