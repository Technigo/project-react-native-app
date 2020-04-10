import React from "react";
import styled from "styled-components/native";
import Quotes from "./components/Quotes";
import { Text } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: #c1e05b;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #ffffff;
`;
const Subtitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #c1539f;
`;

const App = () => {
  return (
    <Container>
      <Title>RICK & MORTY</Title>
      <Subtitle>random quotes on life</Subtitle>
      <Quotes />
    </Container>
  );
};

export default App;
