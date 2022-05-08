import React from "react";
import styled from "styled-components/native";
import  SensorComponent  from "./components/SensorComponent";
import { ImageBackground } from "react-native";


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;


const App = () => {
  return (
    <ImageBackground
    style={{ flex: 1 }}
    resizeMode="cover"
    source={require("./assets/steps.jpg")}
   >
    <Container>
      <SensorComponent/>
      </Container>
      </ImageBackground>
  );
};

export default App;


