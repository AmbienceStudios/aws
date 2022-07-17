import React from "react";
import Card from "./Card";
import super1 from "../assets/Boxer3.jpg";
import super2 from "../assets/Boxer4_1.jpg";
import super3 from "../assets/Boxer6_1.jpg";
import super4 from "../assets/Boxer7.jpg";
import super5 from "../assets/Boxer8.jpg";
import super6 from "../assets/Boxer10.jpg";
import super7 from "../assets/Boxer14.jpg";
import super8 from "../assets/Boxer15.jpg";
import super9 from "../assets/boxer_14_laker.jpg";
import super10 from "../assets/boxer_15_metallic_red.jpg";
import super11 from "../assets/boxer_enlight.jpg";





 
export default function SuperRare() {
  const data = [
    {
      image: super8,
      series: "1st Gen",
      title: "Golden Boy",
      price: 4.24,
      tag: 12983,
      time: 1,
    },
    {
      image: super1,
      series: "1st Gen",
      title: "Golden Boy",
      price: 4.39,
      tag: 12983,
      time: 1,
    },
    {
      image: super7,
      series: "1st Gen",
      title: "Golden Boy",
      price: 4.89,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "1st Gen",
      title: "Golden Boy",
      price: 4.36,
      tag: 12983,
      time: 1,
    },
    // {
    //   image: super5,
    //   series: "1st Gen",
    //   title: "Golden Boy",
    //   price: 4.24,
    //   tag: 12983,
    //   time: 1,
    // },
    // {
    //   image: super6,
    //   series: "1st Gen",
    //   title: "Golden Boy",
    //   price: 4.39,
    //   tag: 12983,
    //   time: 1,
    // },
    // {
    //   image: super7,
    //   series: "1st Gen",
    //   title: "Golden Boy",
    //   price: 4.89,
    //   tag: 12983,
    //   time: 1,
    // },
    // {
    //   image: super8,
    //   series: "1st Gen",
    //   title: "Golden Boy",
    //   price: 4.36,
    //   tag: 12983,
    //   time: 1,
    // },
    // {
    //   image: super9,
    //   series: "1st Gen",
    //   title: "Golden Boy",
    //   price: 4.39,
    //   tag: 12983,
    //   time: 1,
    // },
    // {
    //   image: super10,
    //   series: "1st Gen",
    //   title: "Golden Boy",
    //   price: 4.89,
    //   tag: 12983,
    //   time: 1,
    // },
    // {
    //   image: super11,
    //   series: "1st Gen",
    //   title: "Golden Boy",
    //   price: 4.36,
    //   tag: 12983,
    //   time: 1,
    // },

























  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">NFT Collection Teaser</h2>
        <p className="description">
          Preview of the Golden Boy Collection! 
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            // price={price}
            // tag={tag}
            // time={time}
            // key={index}
          />
        ))}
      </div>
    </div>
  );
}
