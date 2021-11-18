import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import "./YellowDiv.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";

const YellowDiv = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <div style={{}}>
      <div>
      <div>
        <div id="#Menu" className="yellowdiv" style={{}}>
          <p className="pMenu">Menu</p>
        </div>
        <Image
          className="imgMenu"
          style={{}}
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/2c75d4d2250c55c69671ac47/53e1dd434950b108f5d08460962934761237d6ed5a4c704c7c2c7bd3964dc05f_1280.jpg"
          rounded
        />
      </div>
      <div className="pText">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="blackDiv">.</div> 
      </div>
      <p className="orangediv">.</p>
      <div>
               <Image
                 className="img2"
                 style={{}}
                 src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/fc662eecb1ff595cb4d5d61c/5ee1dc404c50b108f5d08460962934761237d6ed5a4c704c7c2c7bd3964dc25a_1280.jpg"
                 rounded
               />
      </div>
      </div>
    </div>
  );
};

export default YellowDiv;
