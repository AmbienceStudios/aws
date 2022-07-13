import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/boy.png";
import release2 from "../assets/boy.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="content">
          <h2 className="title">Phase 1</h2>
          <p className="description">
                • Launch Urban Warriors Discord <br/>
                • Launch Urban Warriors GOLDEN BOY COLLECTION <br/> 
                <div className="after">
                <strong>Phase 2 Milestone Requirements:</strong> <br/> 
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
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>

      {/* Next Phase */}

      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Phase 2</h2>
          <p className="description">
                • Launch  WRECKLESS HANDS (2nd gen) <br/>
                • IN GAME COMPATIBLE<br/> 
                • AUGMENTED REALITY DIGITAL CANVASES <br/>
                • AUGMENTED REALITY SOCIAL MEDIA FILTERS<br/> 
                • DIY SCREEN PRINTING TUTORIALS <br/>
                • MERCHANDISE<br/> 
                <div className="after">
                <strong>Launch Jet urban clothing Wearables </strong> <br/> 
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
          <h2 className="title">Phase 3</h2>
          <p className="description">
                • Launch Augmented Reality APP <br/>
                
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
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>

      {/* Next Phase */}

      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Phase 4</h2>
          <p className="description">
          • Launch  WRECKLESS HANDS (2nd gen) <br/>
                • Launch Urban Warriors Native Token<br/> 
                • Launch Rewards Smart contract <br/>
                • Launch Breeding smart contract <br/> 
             
             
                </p>
        </div>
      </div>
      
      <div className="release orange">
        <div className="content">
          <h2 className="title">Phase 5</h2>
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
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>

      {/* Next Phase */}

      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Phase 6</h2>
          <p className="description">
                • Launch into P2E GAMING  METAVERSE <br/>
               
          </p>
        </div>
      </div>













    </div>




  );
}
