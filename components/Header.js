import React from "react";
import styled from "styled-components";

export const Header = () => {
  const Title = styled.Text`
    font-size: 30px;
    color: palevioletred;
  `;
  const SecondTitle = styled.Text`
    font-size: 20px;
    color: rosybrown;
  `;
  const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  `;

  return (
    <HeaderContainer>
      <Title>Hello</Title>
      <SecondTitle>You</SecondTitle>
    </HeaderContainer>
  );
};
