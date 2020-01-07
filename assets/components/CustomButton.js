import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components";

const CustomButton = props => {
  return (
    <Button onPress={props.onPress}>
      <ButtonText>{props.text}</ButtonText>
    </Button>
  );
};

export default CustomButton;

const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #3b4cca;
  flex: 1;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18;
  font-weight: bold;
`;
