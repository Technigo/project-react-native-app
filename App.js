import React from "react";
// import styled from 'styled-components/native'

import { ThingsToDo } from "./components/ThingsToDo";

const Container = styled.View`
  flex: 2;
  background-color: #c0d6e4;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  color: black;
  margin: 20px;
  text-align: center;
`;
const App = () => {
  return (
    <Container>
      <Title>Det regnar Nathaniel, vad ska vi göra då ☔️ ?</Title>
      <ThingsToDo />
    </Container>
  );
};

export default App;
