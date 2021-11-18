import React, { Component } from "react";
import foodTray from "./img/food-tray.png";
import coffe from "./img/coffee-cup.png";
import dish from "./img/dish.png";
import Image from "react-bootstrap/Image";
import "./Footer.css";
import facebook from './img/facebook-app-symbol.png';
import instagram from './img/instagram.png';
import tweeter from './img/twitter.png';
import youtub from './img/youtube.png';
import pintrest from './img/pinterest.png';

const Footer = () => {
  return (
    <div id="contact">
      <div class="bG" id="#Footer">
        <div class="tint"></div>
        <div>
          <p className="h2foot">Fresh Food Everyday</p>
          <p className="pfoot">
            Our Restaurant is a family-owned restaurant that has been proudly
            serving around the 1940s located on the corner of Broadway and West
            112th Street in New York
          </p>
          <div className="divlogo">
          <div className="divlogo1">
          <Image className="logo small" src={facebook} rounded />
          <Image className="logo small" src={instagram} rounded />
          <Image className="logo small" src={tweeter} rounded />
          <Image className="logo small" src={youtub} rounded />
          <Image className="logo small" src={pintrest} rounded />
          </div>
          <div className="divlogo2">
          <Image className="logo l1" src={foodTray} rounded />
          <p className="p11foot">OUR MENU</p>
          <Image className="logo l1" src={dish} rounded />
          <p className="p11foot">SPECIALS</p>
          <Image className="logo l1" src={coffe} rounded />
          <p className="p11foot">DRINKS</p>
          </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Footer;
