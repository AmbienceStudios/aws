import React from "react";
import Card from "./Card";
import super1 from "../assets/boy4.png";
import super2 from "../assets/boy4.png";
import super3 from "../assets/boy4.png";
import super4 from "../assets/boy4.png";
export default function SuperRare() {
  const data = [
    {
      image: super1,
      series: "1st Gen",
      title: "Golden Boy",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "1st Gen",
      title: "Golden Boy",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "1st Gen",
      title: "Golden Boy",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "1st Gen",
      title: "Golden Boy",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">1 of 1's Golden Boy Collection</h2>
        <p className="description">
          We have released four limited edition Golden Boy NFT's
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
