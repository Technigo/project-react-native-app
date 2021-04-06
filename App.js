import React from 'react';
import styled from 'styled-components/native';
import { SensorComponent } from './components/SensorComponent';
import Ingredient from './components/Ingredient';
import Diet from "./components/Diet"

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

const ingredientQuery = {}
const dietQuery = {}

const App = () => {
  return (
    <Container>
      <SensorComponent></SensorComponent>
      <Diet label="dairy" dietQuery={dietQuery} />
      <Ingredient ingredient="rice" ingredientQuery={ingredientQuery} />
    </Container>
  );
};

export default App;
