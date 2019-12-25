import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";

export const Header = ({ title }) => {
  return (
    <Container>
      <StatusBar barStyle="light-content"></StatusBar>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #333333;
  color: white;
  height: 100;
  width: 100%;
  align-self: center;
  margin-top: 0;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  width: 100%;
  text-align: center;
`;

export default Header;
