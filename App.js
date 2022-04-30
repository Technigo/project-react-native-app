import React from "react";
import styled from "styled-components/native";
import { SensorComponent } from "./components/SensorComponent";

const Container = styled.View`
  flex: 1;
  background-color: #2C3D4F;
  justify-content: center;

 
`;


const App = () => {
  return (
    <Container>
      <SensorComponent></SensorComponent>
    </Container>
  );
};

export default App;
