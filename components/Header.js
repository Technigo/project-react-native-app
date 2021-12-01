import React from "react";
import styled from "styled-components/native";

export const Header = () => {
  const Title = styled.Text`
    font-size: 40px;
    color: palevioletred;
    font-weight: 200;
  `;
  const SecondTitle = styled.Text`
    font-size: 30px;
    color: rosybrown;
    font-weight: 500;
  `;
  const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    margin-top: 30px;
  `;

  return (
    <HeaderContainer>
      <Title>Step</Title>
      <SecondTitle>Tracker</SecondTitle>
    </HeaderContainer>
  );
};
