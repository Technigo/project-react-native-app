import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const BottomButton = setTag => {
  return (
    <Button onPress={() => setTag("wat")} title="Press me">
      <ButtonText>Go Giphy!</ButtonText>
    </Button>
  );
};

const Button = styled.TouchableOpacity`
  background: #762bc2;
  position: absolute;
  bottom: 80;
  padding: 10px 20px;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18;
`;

export default BottomButton;
