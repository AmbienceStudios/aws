import React from 'react'
import logo from "../assets/logo2.png";
import '../sass/components/_footer.scss'
import twitter from "../assets/i-twitter.png"
import instagram from "../assets/i-insta.png"
import tiktok from "../assets/i-tiktok.png"
import snapchat from "../assets/i-snap.png"
import direct from "../assets/i-mail.png"
import discord from "../assets/i-discord.png"

const Footer = () => {
  return (
    
    
<div className="footer-container">

<div className="footer-content">
        <div className="brand-footer">
          <img src={logo} alt="logo"/>
          </div>
          {/* <p>Raj Template is a blog website where you will find great tutorials on web design and development. Here each tutorial is beautifully described step by step with the required source code.</p> */}
          <ul className="socials">
              <li><a href="https://discord.gg/nnq359KR" target="_blank"><img src={discord}/></a></li>
              <li><a href="https://twitter.com/urbanwarriornft" target="_blank"><img src={twitter}/></a></li>
              <li><a href="https://www.instagram.com/urbanwarriorsnft" target="_blank"><img src={instagram}/></a></li>
              <li><a href="https://www.tiktok.com/@urbanwarriorsnft" target="_blank"><img src={tiktok}/></a></li>
              <li><a href="https://t.snapchat.com/5Ps2F4We" target="_blank"><img src={snapchat}/></a></li>
              {/* <li><a href="#" target="_blank"><img src={direct}/></a></li> */}
            

            
          </ul>
      </div>

</div>




  )
}

export default Footer