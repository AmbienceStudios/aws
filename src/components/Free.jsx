import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/boy2.png";
import release2 from "../assets/boy3.png";

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

          <div className="slider"> </div>

        </div>

      



      </div>

    </div>
  );
}




      {/* <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Golden Boy"
            title="FIERCE HEART"
            price={2.99}
            tag={1}
            time={30}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Golden Boy"
            title="Golden Boy"
            price={3.95}
            tag="1094"
            time={30}
          />
        </div>
      </div> */}