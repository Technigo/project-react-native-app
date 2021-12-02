import React, { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";

const Title = styled.Text`
  font-size: 15px;
  margin: 10px;
  color: "rgb(rgb(0, 0, 0)";
`;
const TestImage = styled.Image`
  height: 50%;
  width: 250px;
`;
const Affirmation = styled.Text`
  font-size: 20px;
`;


const ScreenBackgroundEnd = styled.ImageBackground`
flex: 1;
justify-content: center;
align-items: center;
`;
const ScreenBackgroundMiddle = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScreenBackgroundStart = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

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
  //Conditionally renders, by using different name for Container, can change background color

  if (previousSteps > 2000) {
    return (
      <ScreenBackgroundEnd source={require("../assets/glitter.jpg")}>
        <TestImage source={require("../assets/star.png")} />
        <Title> You reached your daily goal! You are a Star!</Title>
      </ScreenBackgroundEnd>
    );
  } else if (previousSteps > 1000) {
    return (
      <ScreenBackgroundMiddle source={require("../assets/blue-pink.jpg")}>
        <Title> You are (over) halfway to your target! Woohoo!</Title>

        <Title>Steps taken over the past 24 h: {previousSteps}.</Title>
        <Title> Keep going! </Title>
        <Title> You have {target} remaining to reach your target!</Title>
      </ScreenBackgroundMiddle>
    );
  } else {
    return (
      <>
        <ScreenBackgroundStart source={require("../assets/pink-stripe.jpg")}>
          <Title>Steps taken over the past 24 h: {previousSteps} </Title>
          <Title>{target} steps to reach your target!</Title>
          <Affirmation>{affirmation.affirmation}</Affirmation>
        </ScreenBackgroundStart>
      </>
    );
  }
};

export default StepCounter;
