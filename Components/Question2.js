import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Vibration, TouchableOpacity } from "react-native";
import image from "../assets/sean-thomas-F6920BvzrZE-unsplash.jpg";
import styled from "styled-components"

export const Question2 = ({setCorrectAnswer, correctAnswer, navigation}) => {

  const [userAnswer, setUserAnswer] = useState(false);

  return (

    <StyledImageBackground source={image}> 
    <StyledView>

      <StyledTitle>Gringotts Wizarding Bank is owned and operated by what creature?</StyledTitle>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>Gnomes</StyledTextButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>Wizards</StyledTextButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>Ghouls</StyledTextButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        if (userAnswer) {return} 
        else {setCorrectAnswer(correctAnswer +1); setUserAnswer(true)}}}
      >
        <StyledTextButton>Goblins</StyledTextButton>
        <StyledCorrectAnswer userAnswer={userAnswer}>The bank is owned and operated by goblins. It was created by a goblin named Gringott, in 1474. </StyledCorrectAnswer>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {navigation.navigate('Question 3', {name: 'Question 3'})}}>
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
  margin-top: 70px;
`
const StyledImageBackground = styled.ImageBackground`
  display: flex;
  height: 100%;
  width: 100%;
`
const StyledTitle = styled.Text`
  color: black;
  background-color: rgba(130, 168, 229, 0.8);
  font-size: 28px;
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