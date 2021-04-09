import React from 'react';
import styled from 'styled-components/native';

import { SensorComponent } from './components/SensorComponent';

const Container = styled.View`
  flex: 1;
  background-color: #4a60e3;
  justify-content: center;
  align-items: center;
`;

const MagicBallIcon = styled.Image`
  margin: 50px 0;
  top: 60px;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <Container>
      <MagicBallIcon source={require('./assets/magic-eight-ball.png')}/>
      <SensorComponent></SensorComponent>
    </Container>
  );
};

export default App;
