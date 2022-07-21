import React from "react";
import signup from "../assets/boy.png";
import '../sass/sections/_signup.scss';

export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title"> GOLDEN BOY BATTLE ZONE </h1>
          <p className="description">
          wage your warriors or golden boys & warriors NFTS  in the warriors stadium in the ring 
          
          <div className="notice">
          Your weight className will depend on your NFTs polygon price. 
          </div>

          <div className="notice">
          You will not be able to box anyone outside of your weight className 
          the weight classes includes: 
          </div>

          <div className="notice">
           featherweight, lightweight, middleweight & heavyweight <br/>
            & The winner will be a randomized 
          </div>
           
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
          </div>
          {/* <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
