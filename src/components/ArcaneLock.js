import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";

const ArcaneLock = () => {
  const axios = require("axios");
  const [dndSpell, setDndSpell] = useState([]);
  const [dndSpellClasses, setDndSpellClasses] = useState([]);
  const [dndSpellComponents, setdndSpellComponents] = useState([]);
  const [dndSpellSchool, setdndSpellSchool] = useState([]);
  const [dndSpellSubclasses, setdndSpellSubclasses] = useState([]);
  const [dndSpellDc, setdndSpellDc] = useState([]);
  const [dndSpellDcType, setdndSpellDcType] = useState([]);

  const getDnDClass = async () => {
    const dndSpells = await axios(
      `https://www.dnd5eapi.co/api/spells/arcane-lock`
    );
    setDndSpell(dndSpells.data);
    setDndSpellClasses(dndSpells.data.classes);
    setdndSpellComponents(dndSpells.data.components);
    setdndSpellSchool(dndSpells.data.school);
    setdndSpellSubclasses(dndSpells.data.subclasses);
  };
  useEffect(() => {
    getDnDClass();
  }, []);

  return (
    <>
      <BrowserView>
        <Container fluid>
          <Jumbotron className="classJumbo">
            <h1>{dndSpell.name}</h1>
            <h3 className="subTitle">School: {dndSpellSchool.name}</h3>
            <h3 className="subTitle">Level: {dndSpell.level}</h3>
            <h3 className="subTitle">Description: {dndSpell.desc}</h3>
            <h3 className="subTitle">
              Classes:
              {dndSpellClasses.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">
              Components:
              {dndSpellComponents.map((name) => (
                <h4>{name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">
              Concentration: {String(dndSpell.concentration)}
            </h3>
            <h3 className="subTitle">Ritual: {String(dndSpell.ritual)}</h3>
            <h3 className="subTitle">Range: {dndSpell.range}</h3>
            <h3 className="subTitle">Material: {dndSpell.material}</h3>
            <h3 className="subTitle">Casting Time: {dndSpell.casting_time}</h3>
            <h3 className="subTitle">Duration: {dndSpell.duration}</h3>
          </Jumbotron>
        </Container>
      </BrowserView>
    </>
  );
};

export default ArcaneLock;
