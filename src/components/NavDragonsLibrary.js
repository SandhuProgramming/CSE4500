import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DragonLogo from "./dragon.png";
import { NavLink } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

const NavDragonsLibrary = () => {
  return (
    <>
      <BrowserView>
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
      </BrowserView>
      <MobileView>
        <Container className="navMobileContainer">
          <Navbar className="navBar">
            <Navbar.Brand as={NavLink} to="/">
              <img className="navLogo" src={DragonLogo}></img>
              DragonsLibrary
            </Navbar.Brand>
            <Nav className="mr-auto">
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/classes">
                  Classes
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/spells">
                  Spells
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Container>
      </MobileView>
    </>
  );
};

export default NavDragonsLibrary;
