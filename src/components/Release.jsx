import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/boy.png";
import release2 from "../assets/boy.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
       <div className="title-container">
        <h2 className="title-t">Road Map</h2>
        <p className="description-t">
          The Journey to the Warriors Stadium!
        </p>
      </div>
      <div className="release orange">
        <div className="content">
          <h2 className="title">PHASE 1</h2>
          <p className="description">
                Launch Urban Warriors Discord <br/>
                Launch Urban Warriors GOLDEN BOY COLLECTION <br/> 
                <div className="after">
                <div className="description2">
                <strong>Phase 2 Milestone Requirements:</strong> <br/> 
                </div>
                75 GIVEAWAYS & <br/> 
                75 WHITELIST SPOTS ARE GONE & <br/> 
                3K FOLLOWERS ON TWITTER 
                </div>
          </p>
          {/* <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a> */}
        </div>
        {/* <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div> */}
      </div>

      {/* Next Phase */}

      <div className="release green">
        {/* <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div> */}
        <div className="content">
          <h2 className="title">PHASE 2</h2>
          <p className="description">
               <div className="description2">
               <strong> Launch  WRECKLESS HANDS <br/> (2ND GEN)
               </strong> 
               </div> 
                IN GAME COMPATIBLE<br/> 
                AUGMENTED REALITY DIGITAL CANVASES <br/>
                AUGMENTED REALITY SOCIAL MEDIA FILTERS<br/> 
                DIY SCREEN PRINTING TUTORIALS <br/>
                MERCHANDISE<br/> 
                <div className="after">

                <div className="description2">
                <strong>Launch JET URBAN CLOTHING WEARABLES </strong> <br/> 
               </div> 
       
                IN GAME COMPATIBLE <br/> 
                AR INTERACTIVE EXPERIENCE & <br/> 
                MERCHANDISE 
                </div>
                </p>
            

        </div>
      </div>
      
      {/* Next Phase */}
      
      <div className="release orange">
        <div className="content">
          <h2 className="title">PHASE 3</h2>
          <p className="description">
                Launch Augmented Reality APP <br/>
                
                {/* <div className="after">
                <strong>Phase 2 Milestone Requirements:</strong> <br/> 
                75 GIVEAWAYS & <br/> 
                75 WHITELIST SPOTS ARE GONE & <br/> 
                3K FOLLOWERS ON TWITTER 
                </div> */}
          </p>
          {/* <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a> */}
        </div>
        {/* <div className="image">


        </div> */}
      </div>

      {/* Next Phase */}

      <div className="release green">
        {/* <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div> */}
        <div className="content">
          <h2 className="title">PHASE 4</h2>
          <p className="description">
          Launch  WRECKLESS HANDS (2ND GEN) <br/>
                Launch Urban Warriors Native Token<br/> 
                Launch Rewards Smart contract <br/>
                Launch Breeding smart contract <br/> 
             
             
                </p>
        </div>
      </div>
      
      <div className="release orange">
        <div className="content">
          <h2 className="title">PHASE 5</h2>
          <p className="description">
                • Launch Digital Real Estate Property <br/>
                • IN GAME COMPATIBLE <br/> 
                • RENT OR LEASE  DIGITAL REAL ESTATES

            
          </p>
          {/* <p className="description">
            There will be the only four of these NFTs we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a> */}
        </div>
        {/* <div className="image">
      
        </div> */}
      </div>

      {/* Next Phase */}

      <div className="release green">
        {/* <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          /> *
          <div className="ellipse orange"></div>
        </div> */}
        <div className="content">
          <h2 className="title">PHASE 6</h2>
          <p className="description">
                • Launch into P2E GAMING  METAVERSE <br/>
               
          </p>
        </div>
      </div>













    </div>




  );
}
