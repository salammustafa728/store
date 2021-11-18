import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "./img/top-view-delicious-vegetable-soup-with.jpg";
import Img2 from "./img/top-view-meat-soup-with-bread-loafs-background.jpg";
import Img3 from "./img/view-classic-tomato-soup-with-spoon-blue-bowl-wooden-tray-beans-garlic-onion-tomato-lemon.jpg";
import './Carosel.css';

const Carousel1 = () => {
  return (
    <div id="#Home">
      <Carousel style={{ height: "20%"}}>
        <Carousel.Item>
          <img
            style={{ height: "30%", objectFit: "cover" }}
            className="d-block w-100"
            src={Img3}
            alt="First slide"
          />
           <Carousel.Caption className="caption">
            <h1>HOMEMADE <br/> RESTAURANT</h1>
            <p>Nulla vitae elit libero, <br/>a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "30%", objectFit: "cover" }}
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "30%", objectFit: "cover" }}
            className="d-block w-100"
            src={Img1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel1;
