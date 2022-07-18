import React from "react";

import logo from '../assets/logo2.png'

import '../sass/sections/_home.scss';
// import Client from './client.jsx'







export default function Home() {
  return (
    <div class="container-home">
      <section class="welcome-home">
      <div class="logo"> 
        <img src={logo}/>
      </div>
      <div class="title"> 3D in Development</div>
      </section>

   </div>
  )
}

