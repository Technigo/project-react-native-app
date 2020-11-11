import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
flex = 1;
background-color = darkred;
justify-content: center;
align-items: center;
`;

const Title = styled.Text`
  font-size: 50px;
  color: gold;
`;

const API_KEY = '$2a$10$Z0lX96ZJ6P.Op9TcuriFReO68gPYx.pJ2YoxazzTHRFFHP/nwblpa';

const CharacterDetails = ({ route }) => {
  const [character, setCharacter] = useState([]);

  //characters/{characterId}

  const { itemId } = route.params;
  console.log(itemId);

  const BASE_URL = `https://www.potterapi.com/v1/characters/${itemId}?key=${API_KEY}`;

  useEffect(() => {
    fetch(BASE_URL)
      .then(result => result.json())
      .then(json => setCharacter(json));
    console.log(character);
  }, []);

  console.log(character);
  //console.log(houses.name);
  //console.log(houses.members);

  return (
    <Container>
      <Title>{character.name}</Title>
    </Container>
  );
};

export default CharacterDetails;
