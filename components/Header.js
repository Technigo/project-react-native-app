import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  height: 150px;
  width: 100vw;
  background-color: blue;
  justify-content: center;
  text-align: center;
`;

const HeaderText = styled.Text`
  font-weight: 700;
  font-size: 30px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>When in doubt ask Ron!</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
