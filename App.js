import React from "react";
import styled from "styled-components/native";
import { ImageBackground } from 'react-native'
import { SensorComponent } from "./components/SensorComponent";

import Grass from './assets/Grass.jpg'


const Container = styled.View`
  flex: 1;
  background-color: black;
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
      <ImageBackground
        source={Grass}
        style={{ width: 425, height: 700 }}
        resizeMode='cover'
      >
      <SensorComponent></SensorComponent>
      </ImageBackground>
    </Container>
  );
};

export default App;
