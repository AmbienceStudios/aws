import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo2.png";
import '../sass/components/_navbar.scss'


export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav className="navbar">
      
    <div className="logo">
      <img src={logo}/>
    </div>
   
    <ul className="nav-links">
    
      {/* <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" className="hamburger">&#9776;</label> */}
    
      <div className="menu">
        <li><a href="#p-about" className="nav-link">ABOUT</a></li>
        <li><a href="#p-utilities" className="nav-link">UTILITIES</a></li>
        <li><a href="#p-allocations" className="nav-link">ALLOCATIONS</a></li>
        <li><a href="#p-roadmap" className="nav-link">ROAD MAP</a></li>
       
        <li className="discord"><a href="https://discord.gg/nnq359KR" target="_blank" >DISCORD</a></li>

        <button className="btn-wallet">Connect Wallet</button>

      </div>
    </ul>
  </nav>
  );
}
