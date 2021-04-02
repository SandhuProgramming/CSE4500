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
import { BrowserView, MobileView } from "react-device-detect";

const landing = () => {
  return (
    <>
      <BrowserView>
        <Container classname="landingContainer">
          <div className="landingDiv1"></div>
          <DragonsNav />
        </Container>
      </BrowserView>
      <MobileView>
        <DragonsNav />
      </MobileView>
    </>
  );
};

export default landing;
