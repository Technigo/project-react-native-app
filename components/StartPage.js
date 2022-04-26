import React from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableOpacity } from 'react-native';

const StartWrapper = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const StartText = styled.Text`
  font-size: 25px;
  text-align: center;
`;

const StartPage = () => {
  return (
    <StartWrapper>
      <StartText>
        Are you a fan of The Office? Shake your phone to make your day a bit
        better.
      </StartText>
      <TouchableOpacity>
        <Text onPress={generateQuote}>Get me a quote!</Text>
      </TouchableOpacity>
    </StartWrapper>
  );
};

export default StartPage;
