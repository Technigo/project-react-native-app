import React, { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";
import styled from "styled-components/native";
import { useFonts, PermanentMarker_400Regular } from '@expo-google-fonts/permanent-marker';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

const Title = styled.Text`
  font-size: 20px;
  margin: 10px;
  color: white;
  text-align: center;
`;

const Success= styled.Text `
  font-size: 35px;
  margin: 10px;`
const TestImage = styled.Image`
  height: 50%;
  width: 250px;
`;
const Affirmation = styled.Text`
  font-size: 30px;
  margin: 100px 30px;
  color: white;
`;

const StepsText= styled.Text`
color: white;
font-size: 60px; 
margin-bottom: 30px;
`
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
  const [fontsLoaded] = useFonts({
    PermanentMarker_400Regular, Roboto_700Bold
  });

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

  if (previousSteps > 10000 && fontsLoaded) {
    return (
      <ScreenBackgroundEnd source={require("../assets/glitter.jpg")}>
        <TestImage source={require("../assets/star.png")} resizeMode="contain"/>
        <Success style={{fontFamily: 'PermanentMarker_400Regular'}}> You reached your daily goal! You are a Star!</Success>
        <Success style={{fontFamily: 'PermanentMarker_400Regular'}}> {previousSteps} steps!!! </Success>
      </ScreenBackgroundEnd>
    );
  } else if (previousSteps > 5000 && fontsLoaded) {
    return (
      <ScreenBackgroundMiddle source={require("../assets/cosmic.png")}>
         <StepsText style={{fontFamily: 'PermanentMarker_400Regular'}}>{previousSteps} steps</StepsText>
        <Title style={{fontFamily: 'Roboto_700Bold'}}> You are (over) halfway to your target! Woohoo!</Title>
        <Title style={{fontFamily: 'Roboto_700Bold'}}> Keep going, reach for the stars! </Title>
        <Title style={{fontFamily: 'Roboto_700Bold'}}> ({target} to go!)</Title>
      </ScreenBackgroundMiddle>
    );
  } else {
    return (// this screen is presented if the steps are under 5000. At 1000 steps an API is invoked to fetch an affirmation
      <>
        <ScreenBackgroundStart source={require("../assets/pink-galaxy.jpg")}>
          
          <StepsText style={{color: '#525252'}}>{previousSteps} steps</StepsText>
          <Title style={{color: '#525252'}}>({target} steps to go!)</Title> 
          <Affirmation style={{color: '#525252'}}>{affirmation.affirmation}</Affirmation>
        </ScreenBackgroundStart>
      </>
    );
  }
};

export default StepCounter;
