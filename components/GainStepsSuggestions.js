import React, { useState } from "react";
import styled from "styled-components/native";
import { Vibration } from "react-native";

const ContentWrapperContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

const PickButton = styled.TouchableOpacity`
  margin: 0px;
  padding: 10px;
  width: 200px;
  border-radius: 25px;
  border: 2px solid #94ed8a;
`;

const ButtonText = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #94ed8a;
`;

const SuggestionContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0px 20px 10px 20px;
  padding: 10px;
  width: 300px;
  height: 100px;
  border-radius: 25px;
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

  const vibrationFunction = () => {
    getSuggestion();
    Vibration.vibrate();
  };

  return (
    <ContentWrapperContainer>
      <SuggestionContainer>
        <SuggestionText>{stepSuggestions}</SuggestionText>
      </SuggestionContainer>
      <PickButton onPress={vibrationFunction}>
        <ButtonText>Get help gaining steps</ButtonText>
      </PickButton>
    </ContentWrapperContainer>
  );
};
