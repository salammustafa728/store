import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./Header.css";
import logo from './img/vintage.png';
import Image from 'react-bootstrap/Image';
const Header = () => {
  return (
    <div className="mainDiv">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            {/* {" "} */}
            <Image className="logo" src={logo} rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav style={{ marginLeft: "60%" }} className="me-auto">
              <Nav.Link className="link" href="/">
                   Home
              </Nav.Link>
              <Nav.Link className="link" href="#Products">
               Products 
              </Nav.Link>
              <Nav.Link className="link" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    </div>
  );
};


  

export default Header;
