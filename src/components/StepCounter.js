import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Pedometer } from "expo-sensors";

const Text = styled.Text`
  font-size: 40px;
  color: blue;
`;

export const StepCounter = () => {
  const [countSteps, setCountSteps] = useState(0);
  // const [pastStepCount, setPastStepCount] = useState(0);
  // const end = new Date();
  // const start = new Date();
  // start.setDate(end.getDate() - 1);

  // useEffect(() => {
  // Pedometer.getStepCountAsync(start, end).then((result) => {
     // setPastStepCount(result.steps);
    //});
 // });

  useEffect(() => {
    Pedometer.watchStepCount((result) => {
      setCountSteps(result.steps);
    });
  });

  return (
  <Text>{countSteps}</Text>
  )
};
