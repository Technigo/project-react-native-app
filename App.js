import React from 'react';
import styled from 'styled-components/native';
import { WorkoutType } from './components/WorkoutType';

const App = () => {

  return (
    <Container>
      <Title>JUST DO IT!</Title>
      <WorkoutType />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #b83549;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 24px;
  color: #ed72b6;
  margin-top: 50;
  font-weight: bold;
  text-align: center;
`
export default App;