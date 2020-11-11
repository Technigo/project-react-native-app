import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View, Vibration, TouchableOpacity } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const PickButton = styled.TouchableOpacity`
  background-color: papayawhip;
  padding: 10px;
  border: 2px solid #0025ff;
  margin: 10px;
  width: 200px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #0025ff;
`;

const SuggestionContainer = styled.View`
  padding: 40px;
  width: 300px;
  height: 160px;
  margin: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const SuggestionText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;

export const GainStepsSuggestions = () => {
  const SuggestionArray = [
    {
      suggestion: "Go for a walk until you see a red car.",
      color: "blue"
    },
    {
      suggestion: "Go to the store and buy a fruit.",
      color: "blue"
    },
    {
      suggestion: "Collect some steps by throughing the garbage.",
      color: "blue"
    },
    {
      suggestion: "Go for a walk until you see a kitten",
      color: "blue", 
    },
    {
      suggestion: "Walk back and forth between the bed and bathroom.",
      color: "blue"
    },
    {
      suggestion: "Run as fast as you can for 30 sec.",
      color: "blue"
    },
    {
      suggestion: "Jump on the spot for 1 minute.",
      color: "blue"
    },
    {
      suggestion: "Climp the stairs for 3 minutes.",
      color: "blue"
    },
  ];

  const [stepSuggestions, setStepSuggestions] = useState({});

  const getSuggestion = () => {
    const theSuggestion =
      SuggestionArray[Math.floor(Math.random() * SuggestionArray.length)];
    setStepSuggestions(theSuggestion);
  };

  return (
    <Container>
      <SuggestionContainer style={{ backgroundColor: stepSuggestions.color }}>
        <SuggestionText>{stepSuggestions.suggestion}</SuggestionText>
      </SuggestionContainer>
      <PickButton
        onPress={() => {
          getSuggestion();
          Vibration.vibrate();
        }}
      >
        <ButtonText>Get suggestion</ButtonText>
      </PickButton>
    </Container>
  );
};