import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

const Classes = () => {
  const axios = require("axios");
  const [classes, setClass] = useState([]);
  const getClasses = async () => {
    const classNames = await axios(`https://www.dnd5eapi.co/api/classes/`);
    //console.log(classNames.data.results);
    setClass(classNames.data.results);
  };
  useEffect(() => {
    getClasses();
  }, []);

  return (
    <>
      <BrowserView>
        <div className="dropdownDiv">
          <Dropdown className="spellDropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose Class
            </Dropdown.Toggle>
            <Dropdown.Menu className="spellMenu">
              {classes.map((names) => (
                <Dropdown.Item as={NavLink} to={`/${names.index}`}>
                  {names.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </BrowserView>
      <MobileView>
        <Dropdown className="dropdownDivMobile">
          <Dropdown.Toggle id="dropdown-basic">Choose Class</Dropdown.Toggle>
          <Dropdown.Menu className="spellMenu">
            {classes.map((names) => (
              <Dropdown.Item as={NavLink} to={`/${names.index}`}>
                {names.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </MobileView>
    </>
  );
};

export default Classes;
