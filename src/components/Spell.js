import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  FormControl,
  Container,
  Dropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Spell = () => {
  const axios = require("axios");
  const [spells, setSpells] = useState([]);

  const getSpells = async () => {
    const spellNames = await axios(`https://www.dnd5eapi.co/api/spells/`);
    console.log(spellNames.data.results);
    setSpells(spellNames.data.results);
  };
  useEffect(() => {
    getSpells();
  }, []);

  return (
    <div className="dropdownDiv">
      <Dropdown className="spellDropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose Spell
        </Dropdown.Toggle>
        <Dropdown.Menu className="spellMenu">
          {spells.map((names) => (
            <Dropdown.Item as={NavLink} to={`/${names.index}`}>
              {names.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Spell;
