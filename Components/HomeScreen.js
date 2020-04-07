import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Vibration, TouchableOpacity } from "react-native";
import image from "../assets/roland-losslein-DmDYX_ltI48-unsplash.jpg";
import styled from "styled-components"

export const HomeScreen = ({navigation}) => {
   
  return (

    <StyledImageBackground source={image} >
      <StyledView>
      
        <StyledTitle>Welcome Muggle!</StyledTitle>
        <StyledText>Test your knowledge about the magical world of Harry Potter</StyledText>

        <TouchableOpacity onPress={() => navigation.navigate('Question 1', {name: 'Question 1'})}>
          <StyledTextButton>Start quiz</StyledTextButton>
        </TouchableOpacity>
      
      </StyledView>
    </StyledImageBackground>
  );
}

const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`
const StyledImageBackground = styled.ImageBackground`
  display: flex;
  height: 100%;
  width: 100%;
`
const StyledTitle = styled.Text`
  color: black;
  background-color: rgba(130, 168, 229, 0.8);
  border: 1px solid rgb(130, 168, 229);
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  padding: 0 20px;
`
const StyledText = styled.Text`
  color: black;
  background-color: rgba(150, 205, 255, 0.6);
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  margin-top: 10px;
  padding: 0 20px;
`
const StyledTextButton = styled.Text`
  background-color: rgb(137, 225, 106);
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 35;
  padding: 0 20px;
  border-radius: 20px;
`
