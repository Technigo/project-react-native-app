import React, { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 40px;
  color: palevioletred;
  margin: 10px;
  text-align: center;
`;

const Text = styled.Text`
  font-size: 30px;
  color: black;
  text-align: center;
  margin-top: 10px;
`;

const PedometerScreen = () => {
  const [pedometer, setpedometer] = useState("");
  const [stepCount, setStepCount] = useState(0);

  const Distance = (stepCount / 1300).toFixed(3);
  const _unsubscribe = () => {
    _subscription && _subscription.remove();
    _subscription = null;
  };

  useEffect(() => {
    subscribe();
    return () => _unsubscribe();
  }, []);
  const subscribe = () => {
    Pedometer.watchStepCount((result) => {
      setStepCount(result.steps);
    });
    Pedometer.isAvailableAsync().then(
      (result) => {
        setpedometer(String(result));
      },
      (error) => {
        setpedometer(error);
      }
    );
  };

  return (
    <Container>
      <Title>Track your steps </Title>

      <Text>Steps: {stepCount}</Text>
      <Text> Distance covered: {Distance} </Text>
    </Container>
  );
};

export default PedometerScreen;
