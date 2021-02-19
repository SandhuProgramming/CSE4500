import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DragonLogo from "./dragon.png";
import { NavLink } from "react-router-dom";

const NavDragonsLibrary = () => {
  return (
    <Container className="navContainer">
      <Navbar className="navBar">
        <Navbar.Brand as={NavLink} to="/">
          <img className="navLogo" src={DragonLogo}></img>
          DragonsLibrary
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/classes">
            Classes
          </Nav.Link>
          <Nav.Link as={NavLink} to="/spells">
            Spells
          </Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default NavDragonsLibrary;
