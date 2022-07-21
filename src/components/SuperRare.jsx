import React from "react";
import Boxer1 from '../assets/Boxer1.jpg';
import Boxer2 from "../assets/Boxer2.jpg";
import Boxer3 from "../assets/Boxer3.jpg";
import Boxer4 from "../assets/Boxer4.jpg";
import Boxer5 from "../assets/Boxer5.jpg";
import Boxer6 from "../assets/Boxer6.jpg";
import Boxer7 from "../assets/Boxer7.jpg";
import Boxer8 from "../assets/Boxer8.jpg";
import Boxer9 from "../assets/Boxer9.jpg";
import Boxer10 from "../assets/Boxer10.jpg";
import Boxer11 from "../assets/Boxer11.jpg";
import Boxer12 from "../assets/Boxer12.jpg";
import '../sass/sections/_superRare.scss';

const SuperRare = () => {
  return (

<div className="content-art">

    <div className="image">
    {/* <img src={icon} alt="icon" /> */}
     </div>

    {/* <h2 className="title-art">Collection Preview</h2> */}
    



  <div className="slider">

      <div className="slide-track">

            <div className="slide">
                <img src={Boxer1}/>
            </div>

            <div className="slide">
                <img src={Boxer2}/>
            </div>

            <div className="slide">
                <img src={Boxer3}/>
            </div>

            <div className="slide">
                <img src={Boxer4}/>
            </div>

            <div className="slide">
                <img src={Boxer5}/>
            </div>

            <div className="slide">
                <img src={Boxer6}/>
            </div>

            <div className="slide">
                <img src={Boxer7}/>
            </div>

            <div className="slide">
                <img src={Boxer8}/>
            </div>

            <div className="slide">
                <img src={Boxer9}/>
            </div>

            <div className="slide">
                <img src={Boxer10}/>
            </div>

            <div className="slide">
                <img src={Boxer11}/>
            </div>

            <div className="slide">
                <img src={Boxer12}/>
            </div>


        {/* Same Slide doubled  */}

            
        <div className="slide">
                <img src={Boxer1}/>
            </div>

            <div className="slide">
                <img src={Boxer2}/>
            </div>

            <div className="slide">
                <img src={Boxer3}/>
            </div>

            <div className="slide">
                <img src={Boxer4}/>
            </div>

            <div className="slide">
                <img src={Boxer5}/>
            </div>

            <div className="slide">
                <img src={Boxer6}/>
            </div>

            <div className="slide">
                <img src={Boxer7}/>
            </div>

            <div className="slide">
                <img src={Boxer8}/>
            </div>

            <div className="slide">
                <img src={Boxer9}/>
            </div>

            <div className="slide">
                <img src={Boxer10}/>
            </div>

            <div className="slide">
                <img src={Boxer11}/>
            </div>

            <div className="slide">
                <img src={Boxer12}/>
            </div>


      </div>

 </div>

 </div>
  )
}

export default SuperRare




