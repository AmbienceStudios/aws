import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./components/Home.jsx";


ReactDOM.render(
  <React.StrictMode>
    <Home/>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
