import React from "react";

import Footer from "./components/Footer.jsx";
import Free from "./components/Free.jsx";
// import Home from "./components/Home.jsx";
import Like from "./components/Like.jsx";
// import Navbar from "./components/Navbar.jsx";
import Release from "./components/Release.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
import Signup from "./components/Signup.jsx";
import SuperRare from "./components/SuperRare.jsx";

import './sass/base/_base.scss'


// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(__dirname + '/public'));
// app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
// app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

// app.listen(3000, () =>{
//   console.log("visit http://127.0.0.1:3000");
// });



function App() { return (
    <div className="app-container">
      {/* <ScrollToTop /> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      <Like />
      <Free />
      {/* <Clients /> */}
      <SuperRare />
      <Release />
      <Signup />
      <Footer />
    </div>
  );
}


export default App;

