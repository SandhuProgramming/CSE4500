import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";

const ChainLightning = () => {
  const axios = require("axios");
  const [dndSpell, setDndSpell] = useState([]);
  const [dndSpellClasses, setDndSpellClasses] = useState([]);
  const [dndSpellComponents, setdndSpellComponents] = useState([]);
  const [dndSpellDamage, setdndSpellDamage] = useState([]);
  const [dndSpellDamageType, setdndSpellDamageType] = useState([]);
  const [dndSpellSchool, setdndSpellSchool] = useState([]);
  const [dndSpellSubclasses, setdndSpellSubclasses] = useState([]);
  const [dndSpellDc, setdndSpellDc] = useState([]);
  const [dndSpellDcType, setdndSpellDcType] = useState([]);
  const [dndSpellAoE, setdndSpellAoE] = useState([]);
  const [dndSpellAoESize, setdndSpellAoESize] = useState([]);

  const getDnDClass = async () => {
    const dndSpells = await axios(
      `https://www.dnd5eapi.co/api/spells/chain-lightning`
    );
    setDndSpell(dndSpells.data);
    setDndSpellClasses(dndSpells.data.classes);
    setdndSpellComponents(dndSpells.data.components);
    setdndSpellDamage(dndSpells.data.damage.damage_at_slot_level);
    setdndSpellDamageType(dndSpells.data.damage.damage_type);
    setdndSpellSchool(dndSpells.data.school);
    setdndSpellSubclasses(dndSpells.data.subclasses);
    setdndSpellDc(dndSpells.data.dc);
    setdndSpellDcType(dndSpells.data.dc.dc_type);
  };
  useEffect(() => {
    getDnDClass();
  }, []);

  return (
    <>
      <BrowserView>
        <Container fluid>
          <Jumbotron className="classJumbo">
            <h1 className="">{dndSpell.name}</h1>
            <h3 className="subTitle">School: {dndSpellSchool.name}</h3>
            <h3 className="subTitle">Level: {dndSpell.level}</h3>
            <h3 className="subTitle">Description: {dndSpell.desc}</h3>
            <h3 className="subTitle">
              At Higher Levels...: {dndSpell.higher_level}
            </h3>
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

            <h3 className="subTitle">Damage Type: {dndSpellDamageType.name}</h3>
            <h3 className="subTitle">
              Damage:
              <h5>
                Levels:
                {Object.keys(dndSpellDamage) + ""}
              </h5>
              <h5> Dice Damage: {Object.values(dndSpellDamage) + ""}</h5>
            </h3>
            <h3 className="subTitle">
              Concentration: {String(dndSpell.concentration)}
            </h3>
            <h3 className="subTitle">Ritual: {String(dndSpell.ritual)}</h3>
            <h3 className="subTitle">Material: {dndSpell.material}</h3>
            <h3 className="subTitle">Range: {dndSpell.range}</h3>
            <h3 className="subTitle">Casting Time: {dndSpell.casting_time}</h3>
            <h3 className="subTitle">Dc Type: {dndSpellDcType.name}</h3>
            <h3 className="subTitle">Dc Success: {dndSpellDc.dc_success}</h3>
            <h3 className="subTitle">Duration: {dndSpell.duration}</h3>
            <h3 className="subTitle">
              Subclasses:
              {dndSpellSubclasses.map((item, key) =>
                Object.values(item).map((name, key) =>
                  key === 1 ? <h4>{name}</h4> : <h4></h4>
                )
              )}
            </h3>
          </Jumbotron>
        </Container>
      </BrowserView>
    </>
  );
};

export default ChainLightning;
