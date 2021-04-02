import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";

const AcidArrow = () => {
  const axios = require("axios");
  const [dndSpell, setDndSpell] = useState([]);
  const [dndSpellClasses, setDndSpellClasses] = useState([]);
  const [dndSpellComponents, setdndSpellComponents] = useState([]);
  const [dndSpellDamage, setdndSpellDamage] = useState([]);

  const getDnDClass = async () => {
    const dndSpells = await axios(
      `https://www.dnd5eapi.co/api/spells/acid-arrow`
    );
    console.log(dndSpells.data);
    setDndSpell(dndSpells.data);
    setDndSpellClasses(dndSpells.data.classes);
    setdndSpellComponents(dndSpells.data.components);
    setdndSpellDamage(dndSpells.data.damage.damage_at_slot_level);
  };
  useEffect(() => {
    getDnDClass();
  }, []);

  return (
    <>
      <BrowserView>
        <Container fluid>
          <Jumbotron className="classJumbo">
            <h1 className="classTitle">{dndSpell.name}</h1>
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
              Damage:
              <h5>
                Levels:
                {Object.keys(dndSpellDamage) + ""}
              </h5>
              <h5> Dice Damage: {Object.values(dndSpellDamage) + ""}</h5>
            </h3>
            <h3 className="subTitle">Concentration: false</h3>
            <h3 className="subTitle">Material: {dndSpell.material}</h3>
            <h3 className="subTitle">Material: {dndSpell.range}</h3>
            <h3 className="subTitle">Duration: {dndSpell.duration}</h3>
            <h3 className="subTitle">Level: {dndSpell.level}</h3>
          </Jumbotron>
        </Container>
      </BrowserView>
    </>
  );
};

export default AcidArrow;
