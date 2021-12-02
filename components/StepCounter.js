import React, { useState, useEffect } from "react";
//import { Title } from "react-native";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";

import ButtonApi from "./ButtonApi";

const Container = styled.View`
  background-color: pink;
`;
const Title = styled.Text`
  font-size: 15px;
  margin: 10px;
  color: "rgb(rgb(0, 0, 0)";
`;

const StepCounter = () => {

  const [steps, setSteps] = useState(0);


  useEffect(() => {
    Pedometer.watchStepCount((result) => {
      setSteps(result.steps);
    });
  
  });
  if ({ steps } > 10000) {
    return (
      <Container>
        <ButtonApi />
      </Container>
    );
  } else {
    return (
      <Container>
       
        <Title>Number of steps taken today: {steps}</Title>
      </Container>
    );
  }
};

export default StepCounter;
