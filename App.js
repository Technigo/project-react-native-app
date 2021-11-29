import React from "react";
import styled from "styled-components/native";
import { SensorComponent } from "./components/SensorComponent";
import { ShakeTwin } from "./components/ShakeTwin";

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

const App = () => {
  return (
    <Container>
      <SensorComponent></SensorComponent>
      <ShakeTwin />
    </Container>
  );
};

export default App;
