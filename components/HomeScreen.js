import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

const HomeContainer = styled.View`
   background-color: #57F9EC;
   display: flex;
   flex: 1;
   justify-content: center;
   align-items: center;
`;

const HomeText = styled.Text`
  font-size: 48px;
  display: flex;
  margin-bottom: 20px;
`;

const TouchableText = styled.Text`
    background-color: #F80400;
    font-size: 32px;
    display: flex;
    flex: 2;
    width: 60%;
    color: #fff;
    text-align: center;
    padding: 20px;
    border-radius: 50%;
`



const HomeScreen = () => {
  return (
    <HomeContainer>
      <HomeText>Welcome to our multi-page App</HomeText>
      <TouchableOpacity>
          <TouchableText>Press for poetry</TouchableText>
      </TouchableOpacity>
    </HomeContainer>
  );
};

export default HomeScreen;
