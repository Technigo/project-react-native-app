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

export const GainStepsSuggestions = ({ SuggestionArray }) => {
  const [stepSuggestions, setStepSuggestions] = useState([]);

  const getSuggestion = () => {
    const theSuggestion =
      SuggestionArray[Math.floor(Math.random() * SuggestionArray.length)];
    setStepSuggestions(theSuggestion.suggestion);
  };

  return (
    <Container>
      <SuggestionContainer>
        <SuggestionText>{stepSuggestions}</SuggestionText>
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
