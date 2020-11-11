import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet } from "react-native";
import { StepCounter } from "./src/components/StepCounter.js"
import { GainStepsSuggestions } from "./src/components/GainStepsSuggestions.js"

const Container = styled.View`
  flex: 1;
  background-color: #29472F;
  justify-content: center;
  align-items: center;
`;

//const Title = styled.Text`
  //font-size: 60px;
  //color: #0025ff;
  //font-weight: bold;
//`;

const DateContainer = styled.View`
  margin-top: 0px;
  padding-bottom: 60px;
`

const DateText = styled.Text`
  font-size: 28px;
  color: #94ED8A;
  text-transform: uppercase;
`;

const App = () => {


  return (
    <Container>
      <DateContainer>
        <DateText> {new Date().toLocaleDateString("en-En", { weekday: "long"})}</DateText>
      </DateContainer>
      < StepCounter />
      < GainStepsSuggestions />
    </Container>
  );
};

export default App;
