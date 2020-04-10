import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

// STYLE:
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

export const Houses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/houses")
      .then((res) => res.json())
      .then((json) => setHouses(json));
  }, []);

  return (
    <Container>
      <Title>Houses:</Title>
      {houses.map((house) => (
        <Title key={house.name}> {house.name}</Title>
      ))}
    </Container>
  );
};


/* 

export const Xcode = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/houses")
      .then((res) => res.json())
      .then((json) => setHouses(json));
  }, []);

  return (
    <Container>
      <Title>Info here:</Title>
      {houses.map((house) => (
        <Title key={house.name}> {house.name}</Title>
      ))}
    </Container>
  );
};

*/