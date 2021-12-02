import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";

import ButtonApi from "./ButtonApi";

const Container = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 15px;
  margin: 10px;
  color: "rgb(rgb(0, 0, 0)";
`;
const TestImage = styled.Image`
  height: 50%;
  width: 350px;
`;
const Affirmation = styled.Text`
  font-size: 20px;
`;
const ContainerEnd = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const ContainerStart = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;
const ContainerMiddle =styled.View`
    flex: 0.5;
    justify-content: center;
    align-items: center;
    background-color: blue;`

const StepCounter = () => {
  const [steps, setSteps] = useState(0);
  const [previousSteps, setPreviousSteps] = useState(0);
  const [affirmation, setAffirmation] = useState({});

  const end = new Date();
  const start = new Date();
  start.setDate(end.getDate() - 1);

  useEffect(() => {
    Pedometer.watchStepCount((result) => {
      setSteps(result.steps);
    });
    Pedometer.getStepCountAsync(start, end).then((result) => {
      setPreviousSteps(result.steps);
    });
  });
  useEffect(() => {
    if (previousSteps > 1000) {
      generateAffirmation(); // here I invoke a function which will happen when the previousSteps exceed 1000
    }
  }, []);

  const target = 10000 - previousSteps; // This calculates the remaining steps to reach the daily target
  const generateAffirmation = () => {
    fetch("https://www.affirmations.dev/")
      .then((res) => res.json())
      .then((data) => setAffirmation(data));
  }; // This fetch function fetches a random affirmation and stores it as setAffirmation
    //Conditionally render 
  if (previousSteps > 10000) {
    return (
      <ContainerEnd>
        <TestImage source={require("../assets/star.png")} />
        <Title> You reached your daily goal! You are a Star!</Title>
      </ContainerEnd>
    );
  } else if (previousSteps > 5000) {
    return (
      <ContainerMiddle>
        <Title> You are (over) halfway to your target! Woohoo!</Title>

        <Title>Steps taken over the past 24 h: {previousSteps}.</Title>
        <Title> Keep going! </Title>
        <Title> You have {target} remaining to reach your target!</Title>
      </ContainerMiddle>
    );
  } else {
    return (
        <>
      <ContainerStart>
        <Title>
          Steps taken over the past 24 h: {previousSteps} </Title>
          <Title>{target} steps to reach your target!</Title>
      </ContainerStart>
      <Affirmation>{affirmation.affirmation}</Affirmation>
      </>
    );
  }
};

export default StepCounter;
