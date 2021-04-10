import React from 'react';
import styled from 'styled-components/native';
import background from './assets/game-background.jpg'

import { SensorComponent } from './components/SensorComponent';

const Container = styled.ImageBackground`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Container source={background}>
      <SensorComponent></SensorComponent>
    </Container>
  );
};

export default App;
