import React from "react";
import styled from "styled-components/native";
import { SensorComponent } from "./components/SensorComponent";

const Container = styled.View`
  flex: 1;
  background-color: palegoldenrod;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 25px;
  color: tomato;
`;

const App = () => {
  return (
    <Container>
      <Title>Find out your lunch for today!</Title>
      <SensorComponent></SensorComponent>
    </Container>
  );
};

export default App;
