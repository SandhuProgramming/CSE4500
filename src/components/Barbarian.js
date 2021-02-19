import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Jumbotron, Button } from "react-bootstrap";

const Barbarian = () => {
  const axios = require("axios");
  const [barbarian, setBarbarian] = useState([]);

  const [proficiency, setProf] = useState({});

  const getBarbarian = async () => {
    const barbariansName = await axios(
      `https://www.dnd5eapi.co/api/classes/barbarian`
    );
    console.log(barbariansName.data.proficiencies[1]);
    setBarbarian(barbariansName.data);
    setProf(barbariansName.data.proficiencies[0]);
    setProf(barbariansName.data.proficiencies[1]);
  };

  useEffect(() => {
    getBarbarian();
  }, []);
  console.log(proficiency);
  return (
    <Container>
      <Jumbotron className="classJumbo">
        <h1>{barbarian.name}</h1>
        <h3>Hit Die: {barbarian.hit_die}</h3>
        <h3>
          Proficiency:
          {proficiency.name}
        </h3>
      </Jumbotron>
    </Container>
  );
};

export default Barbarian;

// {barbarian.proficiency_choices[0].from.map((item) => (
//   <>
//     <p>{item.name}</p>
//   </>
// ))}
// <h3>Proficiencies:</h3>

// {barbarian.proficiencies.map((item) => (
//   <>
//     <p>{item.name}</p>
//   </>
// ))}
