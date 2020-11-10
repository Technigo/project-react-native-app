import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

//const API_KEY = '$2a$10$Z0lX96ZJ6P.Op9TcuriFReO68gPYx.pJ2YoxazzTHRFFHP/nwblpa';
//const BASE_URL = `https://www.potterapi.com/v1/houses?key=${API_KEY}`;
//const BASE_URL = 'https://www.potterapi.com/v1/sortingHat';
//const SPELLS_URL = 'spells';
//const URL = BASE_URL + SPELLS_URL + '?key=' + API_KEY;
const API_KEY = '$2a$10$Z0lX96ZJ6P.Op9TcuriFReO68gPYx.pJ2YoxazzTHRFFHP/nwblpa';
const BASE_URL = `https://www.potterapi.com/v1/houses?key=${API_KEY}`;

const SortingHat = ({ navigation }) => {
  const [houses, setHouses] = useState([]);
  const [house, setHouse] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(result => result.json())
      .then(json => setHouses(json));
    //console.log(house);
  }, []);

  const onPress = houses => {
    setHouse(houses[Math.floor(Math.random() * houses.length)]);
    return { house };
  };

  console.log(house);

  return (
    <Container>
      <TouchableOpacity onPress={() => onPress(houses)}>
        <Title>Put on the sorting hat!</Title>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('House Details', {
            itemId: house._id,
          })
        }
      >
        <Title>{house.name}</Title>
      </TouchableOpacity>
    </Container>
  );
};

export default SortingHat;

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
