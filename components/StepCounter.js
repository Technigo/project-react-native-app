import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Pedometer } from "expo-sensors";

const Container = styled.View`
  align-items: center;
  margin: 20px 0 10px 0;
`;

const CountedStepsText = styled.Text`
  font-size: 120px;
  color: #94ed8a;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 28px;
  color: #94ed8a;
  text-transform: uppercase;
`;

export const StepCounter = () => {
  const [countSteps, setCountSteps] = useState(0);

  useEffect(() => {
    Pedometer.watchStepCount((result) => {
      setCountSteps(result.steps);
    });
  });

  return (
    <Container>
      <CountedStepsText>{countSteps}</CountedStepsText>
      <Text>steps</Text>
    </Container>
  );
};
