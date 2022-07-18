import React from "react";
import '../sass/sections/_free.scss';

// import Slider from './Slider.jsx'

export default function Free() {
 
    return (

    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>

        <div className="content">
          <div className="image">
            {/* <img src={icon} alt="icon" /> */}
          </div>
          <h2 className="title">Golden Boy Ultilites</h2>
          <p className="description">
            These are the ultilities of holding a Golden Boy
          </p>

          <div className="slider"> 
          
          {/* <Slider/> */}
           
          </div>

        </div>

      



      </div>

    </div>

        

  );
}


