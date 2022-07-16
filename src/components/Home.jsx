import React from "react";
import home from "../assets/boy.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">A Decentralized Project</p>
          <h1 className="title">The Golden Boy Collection</h1>
          <p className="description"><strong>
          Founded by Jet Urban Clothing.</strong></p>
          <br/>
          <p className="description">
          We are a commnuity of warriors who have come from all walks of life who share the same vision to make the world a better place
          </p>

        <div className="notice-container">
          <div className="notice">
          Jet urban clothing admin locked the opensea account @urbanwarriors wallet address
          </div>

           
          <div className="notice2">
          0x13E051C962Ed2870F9121bF5F827F653355CA10D as a security measure 
          </div>
         
          <div className="notice">
          If you own any from this collection you will not be able to buy,sell or transfer!!!!
          </div>

          <div className="notice">
          All previous holders of the golden boy collection will be air dropped the nfts the previous when minting from (official name & link to this site) goes live
          </div>
          </div>
         
          <button>Learn More</button>
        
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="Golden Boy" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
