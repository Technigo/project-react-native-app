import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderTop>
      <Title></Title>
    </HeaderTop>
  );
};

const HeaderTop = styled.View`
  height: 80;
  padding-top: 38;
  background-color: coral;
`;

const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 20;
  font-weight: bold;
`;
export default Header;
