import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const Title = styled.Text`
  font-size: 60px;
  color: palevioletred;
`;
const SecondTitle = styled.Text`
  font-size: 40px;
  color: rosybrown;
`;

export const WelcomePage = () => {
  return (
    <View>
      <Title>Hello</Title>
      <SecondTitle>You</SecondTitle>
    </View>
  );
};
