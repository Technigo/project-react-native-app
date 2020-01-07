import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";

const PokemonCard = props => {
  return (
    <Container>
      <PokemonImage source={{ uri: props.image }} />
      <PokemonName>{props.name}</PokemonName>
    </Container>
  );
};

export default PokemonCard;

const Container = styled.View`
  align-items: center;
  background-color: #000;
  flex: 8;
`;

const PokemonImage = styled.Image`
  height: 200;
  margin-top: auto;
  width: 200;
`;

const PokemonName = styled.Text`
  color: #fff;
  font-size: 24;
  font-weight: bold;
  margin-bottom: auto;
  text-align: center;
  text-transform: capitalize;
`;
