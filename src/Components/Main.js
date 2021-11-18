import React, { Component } from "react";
import Carousel1 from "./Carousel";
import "./Main.css";
import YellowDiv from "./YellowDiv";
import Section3 from './Section3';
import Section4 from "./Section4";
import Section5 from './Section5';
import Section6 from "./Section6";
const Main = () => {
  return (
    <div>
      <Carousel1 id="#Home"/>
      <YellowDiv/>
      <Section3/>
      <Section4 id="#Products"/>
      <Section5/>
      <Section6/>
    </div>
  );
};

export default Main;
