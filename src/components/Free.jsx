import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/boy2.webp";
import release2 from "../assets/boy3.webp";

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
          <h2 className="title">Golden Boy Collection Giveaway!</h2>
          <p className="description">
            Sign up today to enter a chance to wain a Golden Boy when we launch
          </p>
        </div>
      </div>
      <div className="cards">
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
      </div>
    </div>
  );
}
