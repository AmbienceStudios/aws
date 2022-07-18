import React from "react";
import image1 from "../assets/boy3.png";
import image2 from "../assets/boy2.png";
import '../sass/sections/_like.scss';




export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="imageA">
            <img src={image1} alt="goldenBoy" />
          </div>
          <h1 className="title">GOLDEN BOY</h1>
          <h2 className="subtitle">GOLDEN BOY COLLECTION</h2>
          <p className="description">
          GOLDEN BOY FOUGHT WITH BEING DIFFERENT. HE COULDN'T FIGURE OUT WHY PEOPLE DIDN'T 
          UNDERSTAND OR APPRECIATE HIS PERSONALITY. UNTIL ONE DAY HE REALIZED IT WAS TIME TO 
          CREATE HIS OWN WAVE & THERE WOULD BE A TRIBE OF HIS OWN THAT WOULD SEE HIM FOR WHO HE WAS.
          HIS UNIQUE PERSONALITY TRAITS ARE STRENGTH,CREATIVITY & INTROVERT.
          </p>
        </div>
        <div className="container">
        <div className="content">
          <div className="imageA">
            <img src={image2} alt="goldenBoy" />
          </div>
          <h1 className="title">FIERCE HEART</h1>
          <h2 className="subtitle">GOLDEN BOY COLLECTION</h2>
          <p className="description">
          FIERCE HEART GREW WAS BATTLING DEPRESSION DUE TO THE DEATH OF HIS MOM WHEN HE WAS JUST 5 YEARS OLD. 
          IT BROKE HIM, HE NEVER LOOKED AT THE WORLD THE SAME. HE THEN SWORE HIS MOTHER'S NAME WOULD LIVE ON THROUGH HIM. 
          (IT'S HARD TO HANDLE A LOSS OF A LOVED ONE, WE MUST FIND A WAY TO HAVE THEIR NAMES LIVE ON)
          </p>
                 </div>
                 </div>
      </div>
    </div>
  );
}
