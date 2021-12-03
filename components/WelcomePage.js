import React from "react";
import styled from "styled-components/native";
import { useSelector } from "react-redux";

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
  const nameData = useSelector((state) => state.settings.name);
  return (
    <Container>
      <FirstTitle>Hello</FirstTitle>
      <SecondTitle>{nameData ? { namedata } : "You"}</SecondTitle>
    </Container>
  );
};
