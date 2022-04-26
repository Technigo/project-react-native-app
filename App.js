import React from 'react';
import styled from 'styled-components/native';
import ShakeApi, { SensorComponent } from './components/SensorComponent';
import { Text } from 'react-native';
import StartPage from './components/StartPage';
import Quotes from './components/Quotes';
import Loading from './components/Loading';

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
      <Quotes />
      <ShakeApi></ShakeApi>
    </Container>
  );
};

export default App;
