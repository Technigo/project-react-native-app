import React, { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

const Title = styled.Text`
  font-size: 40px;
  color: palevioletred;
  margin: 10px;
  text-align: center;
`;
const Image = styled.Image`
  height: 350px;
  width: 350px;
`;
const Text = styled.Text`
  font-size: 30px;
  color: palevioletred;
  text-align: center;
  margin-top: 0px;
`;

const HomeScreen = () => {
  const [pedometer, setpedometer] = useState("");
  const [stepCount, setStepCount] = useState(0);

  const Distance = (stepCount / 1300).toFixed(3);
  useEffect(() => {
    subscribe();
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

      <Image source={require("../assets/run-img.png")} />
      <Text>Steps: {stepCount}</Text>
      <Text> Distance covered: {Distance} </Text>
    </Container>
  );
};

export default HomeScreen;
