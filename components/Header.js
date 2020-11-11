import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const HeaderContainer = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  text-align: center;
  font-size: 30;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Daily planner</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
