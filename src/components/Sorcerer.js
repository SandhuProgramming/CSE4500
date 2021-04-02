import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";

const Sorcerer = () => {
  const axios = require("axios");
  const [dndClass, setDndClass] = useState([]);
  const [proficiencyChoices, setProfChoices] = useState([]);
  const [proficiency, setProf] = useState([]);
  const [savingThrows, setSavingThrows] = useState([]);
  const [startingEquipment, setstartingEquipment] = useState([]);
  const [startingEquipmentOptions, setstartingEquipmentOptions] = useState([]);
  const [subClasses, setSubClasses] = useState([]);

  const getDnDClass = async () => {
    const dndClassName = await axios(
      `https://www.dnd5eapi.co/api/classes/sorcerer`
    );
    console.log(dndClassName.data.starting_equipment_options);
    setDndClass(dndClassName.data);
    setProfChoices(dndClassName.data.proficiency_choices[0].from);
    setProf(dndClassName.data.proficiencies);
    setSavingThrows(dndClassName.data.saving_throws);
    setstartingEquipment(dndClassName.data.starting_equipment);
    setstartingEquipmentOptions(dndClassName.data.starting_equipment_options);
    setSubClasses(dndClassName.data.subclasses);
  };

  useEffect(() => {
    getDnDClass();
  }, []);

  return (
    <>
      <BrowserView>
        <Container fluid>
          <Jumbotron className="classJumbo">
            <h1 className="classTitle">{dndClass.name}</h1>
            <h3 className="subTitle">Hit Die: {dndClass.hit_die}</h3>
            <h3 className="subTitle">
              Proficiency Choices:
              {proficiencyChoices.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">
              Proficiency:
              {proficiency.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">
              Saving Throws:
              {savingThrows.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">
              Starting Equipment:
              {startingEquipment.map((name) => (
                <h4>{name.equipment.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">Starting Equipment Options:</h3>
            <h3 className="subTitle">Sub Classes:</h3>
          </Jumbotron>
        </Container>
      </BrowserView>

      <MobileView>
        <Container>
          <Jumbotron className="classJumboMobile">
            <h1>{dndClass.name}</h1>
            <h3 className="subTitle">Hit Die: {dndClass.hit_die}</h3>
            <h3 className="subTitle">
              Proficiency Choices:
              {proficiencyChoices.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">
              Proficiency:
              {proficiency.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">
              Saving Throws:
              {savingThrows.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">
              Starting Equipment:
              {startingEquipment.map((name) => (
                <h4>{name.equipment.name}</h4>
              ))}
            </h3>
            <h3 className="subTitle">Starting Equipment Options:</h3>
            <h3 className="subTitle">Sub Classes:</h3>
          </Jumbotron>
        </Container>
      </MobileView>
    </>
  );
};

export default Sorcerer;
