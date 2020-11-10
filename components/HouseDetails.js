import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

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

const HouseDetails = ({ route }) => {
  const [houses, setHouses] = useState([]);

  const { itemId } = route.params;
  console.log(itemId);

  const BASE_URL = `https://www.potterapi.com/v1/houses/${itemId}?key=${API_KEY}`;

  useEffect(() => {
    fetch(BASE_URL)
      .then(result => result.json())
      .then(json => setHouses(json));
    console.log(houses);
  }, []);

  console.log(houses);

  return (
    <Container>
      {houses.map(house => (
        <Title key={house.name}>{house.name}</Title>
      ))}
    </Container>
  );
};

export default HouseDetails;
