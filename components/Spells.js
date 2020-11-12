import React, { useState, useEffect } from 'react';
//import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const API_KEY = '$2a$10$Z0lX96ZJ6P.Op9TcuriFReO68gPYx.pJ2YoxazzTHRFFHP/nwblpa';
const BASE_URL = `https://www.potterapi.com/v1/spells?key=${API_KEY}`;

const Spells = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(result => result.json())
      .then(json => setSpells(json));
    //console.log(house);
  }, []);

  console.log(spells);

  return <Container>{spells}</Container>;
};

export default Spells;

const Container = styled.View`
flex = 1;
background-color = burgundy;
justify-content: center;
align-items: center;
`;

const Title = styled.Text`
  font-size: 50px;
  color: gold;
`;
