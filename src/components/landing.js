import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import DragonsNav from "./NavDragonsLibrary";
import Dice from "./dice.png";

const landing = () => {
  return (
    <Container classname="landingContainer">
      <div className="landingDiv1"></div>
      <DragonsNav />
      <img className="dice" src={Dice}></img>
    </Container>
  );
};

export default landing;
