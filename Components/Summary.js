import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Vibration, TouchableOpacity } from "react-native";
import image3 from "../assets/sean-thomas-F6920BvzrZE-unsplash.jpg";
import {NavigationContainer} from '@react-navigation/native';
import styled from "styled-components"

export const Summary = ({setCorrectAnswer, correctAnswer, navigation}) => {
  return (
    <StyledImageBackground source={image3}> 
    <StyledView>

      <StyledText>You had {correctAnswer} correct answers! </StyledText> 

      <TouchableOpacity onPress={() => {setCorrectAnswer(0); navigation.navigate('Home', {name: 'Home'})}}>
      <StyledButton>Start again</StyledButton>
      </TouchableOpacity>

      </StyledView>
    </StyledImageBackground>
  )
}

const StyledView = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledImageBackground = styled.ImageBackground`
  display: flex;
  height: 100%;
  width: 100%;
`
const StyledText = styled.Text`
  color: black;
  background-color: rgba(194, 194, 176, 0.8);
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  padding: 0 20px;
`
const StyledButton = styled.Text`
  background-color: rgb(130, 168, 229);
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 15;
  padding: 0 20px;
  border-radius: 20px;
`
