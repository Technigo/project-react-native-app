import React, { useState } from "react";
import styled from "styled-components/native";
import { Vibration } from "react-native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const PickButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 0px;
  width: 200px;
  border-radius: 25px;
  border: 2px solid #94ed8a;
`;

const ButtonText = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #94ed8a;
`;

const SuggestionContainer = styled.View`
  padding: 10px;
  width: 300px;
  height: 100px;
  margin: 80px 20px 10px 20px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const SuggestionText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #94ed8a;
`;

export const GainStepsSuggestions = () => {
  const SuggestionArray = [
    {
      suggestion: "Go for a walk until you see a red car.",
    },
    {
      suggestion: "Go to the store and buy a fruit.",
    },
    {
      suggestion: "Collect some steps by throughing out the garbage.",
    },
    {
      suggestion: "Go for a walk until you see a kitten.",
    },
    {
      suggestion: "Walk back and forth between the bed and bathroom.",
    },
    {
      suggestion: "Run as fast as you can for 30 sec.",
    },
    {
      suggestion: "Jump on the spot for 1 minute.",
    },
    {
      suggestion: "Climb some stairs for 3 minutes.",
    },
    {
      suggestion: "Walk backwards 50 steps.",
    },
    {
      suggestion: "Walk until you say hi to a stranger.",
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
      <SuggestionContainer>
        <SuggestionText>{stepSuggestions.suggestion}</SuggestionText>
      </SuggestionContainer>
      <PickButton
        onPress={() => {
          getSuggestion();
          Vibration.vibrate();
        }}
      >
        <ButtonText>Get help gaining steps</ButtonText>
      </PickButton>
    </Container>
  );
};
