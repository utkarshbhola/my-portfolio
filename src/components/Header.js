import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">UTKARSH</div>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
