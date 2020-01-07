import React from "react";
import { ActivityIndicator, View } from "react-native";
import styled from "styled-components";

const LoadingPokemonCard = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#cc0000" />
    </Container>
  );
};

export default LoadingPokemonCard;

const Container = styled.View`
  align-items: center;
  background-color: #000;
  flex: 8;
  justify-content: center;
`;
