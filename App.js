import React from 'react';
import styled from 'styled-components/native';
import { ImageBackground } from 'react-native'
import { SensorComponent } from './components/SensorComponent';
import { SpaceFact } from './components/SpaceFact';

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

const ScreenBackground = styled.ImageBackground`
  height: 100%;
`

const App = () => {
  return (
    <Container>
      <ScreenBackground source={require('./assets/rocket-background.png')}>
      <SpaceFact />
      {/* <SensorComponent></SensorComponent> */}
      </ScreenBackground>
    </Container>
  );
};

export default App;
