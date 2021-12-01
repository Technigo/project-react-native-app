import React from "react";
import styled from "styled-components/native";

const FirstTitle = styled.Text`
  font-size: 70px;
  color: palevioletred;
  font-weight: 200;
`;
const SecondTitle = styled.Text`
  font-size: 50px;
  color: rosybrown;
  font-weight: 400;
`;
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

export const WelcomePage = () => {
  return (
    <Container>
      <FirstTitle>Hello</FirstTitle>
      <SecondTitle>You</SecondTitle>
    </Container>
  );
};
