import React from 'react';
import styled from 'styled-components/native';

import { SensorComponent } from './components/SensorComponent';

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

const MagicBallIcon = styled.Image`
  margin: 50px 0;
  width: 400px;
  height: 400px;
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
