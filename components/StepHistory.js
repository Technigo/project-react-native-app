import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Pedometer } from "expo-sensors";

const Container = styled.View`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 50px;
`;

const Text = styled.Text`
  font-size: 28px;
  color: #94ed8a;
  text-transform: uppercase;
  `;

export const StepHistory = () => {
  const [showHistory, setShowHistory] = useState(0);

  useEffect(() => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);

    Pedometer.getStepCountAsync((start, end).then(
      result => {
        setShowHistory({ pastStepCount: result.steps });
      }, 
      error => {
        this.setShowHistory({
          pastStepCount: "Could not get Stepcount:" + error,
    ));
  });

  return (
    <Container>
      <Text>{showHistory}</Text>
    </Container>
  )
};
