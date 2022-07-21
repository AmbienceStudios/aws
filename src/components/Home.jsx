import React from "react";
import home from "../assets/boy.png";
import '../sass/sections/_home.scss'



export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <p className="sub-title">A Fashion NFT Decentralized Project</p>
          <h1 className="title13">The Golden Boy Collection</h1>
          <p className="description"><strong>
          Founded by Jet Urban Clothing</strong>
          </p>
          <br/>
          <p className="description">
          We are a commnuity of warriors who have come from all walks of life who share the same vision to make the world a better place
          </p>
          <h1 className="sub-title">The Mission</h1>
          <p className="description">
          The mission is to teach people how to invest & understand the web3 space so that we can 
          collectively give back to kids who are in foster care, group homes & orphanages through the 
          sales of nfts & the development of blockchain technology. As well as giving back to non profits 
          focused on mental health awareness.
          </p>



       
          {/* <div className="btn-l">
          <button>Learn More</button>
          </div> */}
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

