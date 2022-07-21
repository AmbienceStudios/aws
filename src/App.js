import React from "react";

import Footer from "./components/Footer.jsx";
import Free from "./components/Free.jsx";
import Home from "./components/Home.jsx";
import Like from "./components/Like.jsx";
import Navbar from "./components/Navbar.jsx";
import Release from "./components/Release.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
// import Signup from "./components/Signup.jsx";
import SuperRare from "./components/SuperRare.jsx";
import Allocation from "./components/Allocations.jsx"

import './sass/base/_base.scss'


function App() { return (
    <div className="app-container">
      {/* <ScrollToTop /> */}
      <Navbar  />
      <Home />
      <Like/>
      <Free />
      {/* <Clients /> */}
      <SuperRare />
      <Allocation />
      <Release />
      {/* <Signup /> */}
      <Footer />
    </div>
  );
}


export default App;

