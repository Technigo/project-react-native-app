import React from 'react';
import styled from 'styled-components/native';

import { ImageBackground } from 'react-native'
import { SensorComponent } from './components/SensorComponent';
import { SubTitleTemp } from './components/Subtitle';
import background from './assets/background.jpg'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  margin-top: 40px;
  margin-left: 40px;
  margin-bottom: 100px;
  color: #BF2669;
`;

const App = () => {
  return (
    
    <Container>
      <ImageBackground
        source={background}
        style={{width:415, height:680}} 
        resizeMode='cover'
        >
          <Title>Great Oracle: </Title>
          <SensorComponent></SensorComponent>
          <SubTitleTemp></SubTitleTemp>
      </ImageBackground>
    </Container>
  );
};

export default App;
