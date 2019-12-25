import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { StatusBar, Platform, Button } from "react-native";
import { Input } from "./Input";

export const Header = ({ title }) => {
  return (
    <Container>
      <StatusBar barStyle="light-content"></StatusBar>
      <Title>{title}</Title>
      {/* <Input addText={addText} /> */}
    </Container>
  );
};

//Platform added for Andriod as it does not support SafeAreaView
const Container = styled.SafeAreaView`
  flex-direction: ${props => (props.row ? "row" : "column")};
  background-color: #333333;
  color: white;
  height: 100;
  width: 100%;
  align-self: center;
  margin-top: 0;
  padding-top: ${Platform.OS === "android" ? 25 : 0};
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  width: 100%;
  text-align: center;
`;

// const InputField = styled.TextInput`
//   border-color: black;
//   border-width: 1px;
//   width: 80%;
//   height: 30;
//   background-color: #fff;
// `;

export default Header;
