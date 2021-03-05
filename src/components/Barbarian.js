import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { BrowserView, MobileView } from "react-device-detect";

const Barbarian = () => {
  const axios = require("axios");
  const [barbarian, setBarbarian] = useState([]);
  const [proficiencyChoices, setProfChoices] = useState([]);
  const [proficiency, setProf] = useState([]);
  const [savingThrows, setSavingThrows] = useState([]);
  const [startingEquipment, setstartingEquipment] = useState([]);
  const [startingEquipmentOptions, setstartingEquipmentOptions] = useState([]);
  const [subClasses, setSubClasses] = useState([]);

  const getBarbarian = async () => {
    const barbariansName = await axios(
      `https://www.dnd5eapi.co/api/classes/barbarian`
    );
    console.log(barbariansName.data.starting_equipment_options);
    setBarbarian(barbariansName.data);
    setProfChoices(barbariansName.data.proficiency_choices[0].from);
    setProf(barbariansName.data.proficiencies);
    setSavingThrows(barbariansName.data.saving_throws);
    setstartingEquipment(barbariansName.data.starting_equipment);
    setstartingEquipmentOptions(barbariansName.data.starting_equipment_options);
    setSubClasses(barbariansName.data.subclasses);
  };

  useEffect(() => {
    getBarbarian();
  }, []);

  return (
    <>
      <BrowserView>
        <Container>
          <Jumbotron className="classJumbo">
            <h1>{barbarian.name}</h1>
            <h3>Hit Die: {barbarian.hit_die}</h3>
            <h3>
              Proficiency Choices:
              {proficiencyChoices.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3>
              Proficiency:
              {proficiency.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3>
              Saving Throws:
              {savingThrows.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3>
              Starting Equipment:
              {startingEquipment.map((name) => (
                <h4>{name.equipment.name}</h4>
              ))}
            </h3>
            <h3>
              Starting Equipment Options:
              {startingEquipmentOptions.map((name) => (
                <>
                  <h4>{name.from[0].equipment.name}</h4>
                  <h4>
                    {name.from[1].equipment_option.from.equipment_category.name}
                  </h4>
                </>
              ))}
            </h3>
            <h3>Sub Classes:</h3>
          </Jumbotron>
        </Container>
      </BrowserView>
      <MobileView>
        <Container>
          <Jumbotron className="classJumboMobile">
            <h1>{barbarian.name}</h1>
            <h3>Hit Die: {barbarian.hit_die}</h3>
            <h3>
              Proficiency Choices:
              {proficiencyChoices.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3>
              Proficiency:
              {proficiency.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3>
              Saving Throws:
              {savingThrows.map((name) => (
                <h4>{name.name}</h4>
              ))}
            </h3>
            <h3>
              Starting Equipment:
              {startingEquipment.map((name) => (
                <h4>{name.equipment.name}</h4>
              ))}
            </h3>
            <h3>
              Starting Equipment Options:
              {startingEquipmentOptions.map((name) => (
                <>
                  <h4>{name.from[0].equipment.name}</h4>
                  <h4>
                    {name.from[1].equipment_option.from.equipment_category.name}
                  </h4>
                </>
              ))}
            </h3>
            <h3>Sub Classes:</h3>
          </Jumbotron>
        </Container>
      </MobileView>
    </>
  );
};

export default Barbarian;
