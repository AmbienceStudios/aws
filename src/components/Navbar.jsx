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
    <nav class="navbar">
      
    <div class="logo">
      <img src={logo}/>
    </div>
   
    <ul class="nav-links">
    
      {/* <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label> */}
    
      <div class="menu">
        <li><a href="#p-about" class="nav-link">ABOUT</a></li>
        <li><a href="#p-utilities" class="nav-link">UTILITIES</a></li>
        <li><a href="#p-allocations" class="nav-link">ALLOCATIONS</a></li>
        <li><a href="#p-roadmap" class="nav-link">ROAD MAP</a></li>
       
        <li class="discord"><a href="https://discord.gg/nnq359KR" target="_blank" >DISCORD</a></li>
      </div>
    </ul>
  </nav>
  );
}
