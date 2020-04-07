import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Vibration, TouchableOpacity } from "react-native";
import image from "../assets/alden-maben-0PxBUTi3HXI-unsplash.jpg";
import {NavigationContainer} from '@react-navigation/native';
import styled from "styled-components"

export const Summary = ({setCorrectAnswer, correctAnswer, navigation}) => {

 const quizSummary = () => {

  if (correctAnswer === 0) {
    return (
      <StyledText> You had {correctAnswer} correct answers! Perhaps you should watch the movies to refresh your memory. </StyledText> 
    )
  } else if (correctAnswer > 0 && correctAnswer < 3) {
      return (
        <StyledText> You had {correctAnswer} correct answers! You must like Harry Potter! </StyledText> 
      )
    } else if (correctAnswer === 3) {
        return (
          <StyledText> You had {correctAnswer} correct answers! You are a true Harry Potter fan! </StyledText>
        ) 
    }  
  }

 
  return (
    <StyledImageBackground source={image}> 
    <StyledView>

       {quizSummary()}

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
  background-color: rgba(150, 205, 255, 0.9);
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  padding: 0 20px;
`
const StyledButton = styled.Text`
  background-color: rgb(137, 225, 106);
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 15;
  padding: 0 20px;
  border-radius: 20px;
`
