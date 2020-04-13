import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Vibration, TouchableOpacity } from "react-native";
import image from "../assets/darshan-patel-jAThVtHa34A-unsplash.jpg";
import {NavigationContainer} from '@react-navigation/native';
import styled from "styled-components"

export const Question1 = ({setCorrectAnswer, correctAnswer, navigation}) => {

  const [userAnswer, setUserAnswer] = useState(false);

  return (

    <StyledImageBackground source={image}> 
    <StyledView>

      <StyledTitle>Where is Hogwarts located?</StyledTitle>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>England</StyledTextButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        if (userAnswer) {return} 
        else {setCorrectAnswer(correctAnswer +1); setUserAnswer(true)}}}
      >

        {/* om user answer är falskt ska man kunna få ett poäng. Om user answer är sant innebär det att personen tryck på fel svar innan. Knapptryckningen ska även efteråt sätta useranswer till sant för att hindra att personen kan få fler än 1 rätt svar på samma fråga. */}

        <StyledTextButton>Scotland</StyledTextButton>
        <StyledCorrectAnswer userAnswer={userAnswer}>In the magical world of Harry Potter, Hogwarts is located somewhere in Scotland. </StyledCorrectAnswer>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>Ireland</StyledTextButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>Wales</StyledTextButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {navigation.navigate('Question 2', {name: 'Question 2'})}}>
        <StyledButton userAnswer={userAnswer}>Continue</StyledButton>
      </TouchableOpacity>

    </StyledView>
    </StyledImageBackground>
  )
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
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  padding: 0 20px;
`
const StyledTextButton = styled.Text`
  background-color: ${props => props.userAnswer ? "rgba(216, 225, 255, 0.5)" : "rgba(150, 205, 255, 0.9)"}
  font-size: 28px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 15;
  padding: 0 20px;
  width: 350px; 
  border-radius: 10px;
`

const StyledCorrectAnswer = styled.Text`
  height: ${props => props.userAnswer ? "auto" : "0px"}
  background-color: ${props => props.userAnswer ? "rgba(130, 168, 229, 0.8)" : "transparent"}
  overflow: hidden;
  font-size: 24px;
  font-weight: bold;
  font-family: monospace;
  width: 350px; 
  padding: 0 20px;
  border-radius: 10px;
`

const StyledButton = styled.Text`
  height: ${props => props.userAnswer ? "auto" : "0px"}
  background-color: #eeba30;
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 15;
  padding: ${props => props.userAnswer ? "10px" : "0px"}
  border-radius: 20px;
`


