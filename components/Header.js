import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  background-color: #99a799;
  height: 125px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: #c55353;
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
