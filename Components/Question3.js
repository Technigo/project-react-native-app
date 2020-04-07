import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, Vibration, TouchableOpacity } from "react-native";
import image from "../assets/treddy-chen-PYTqSwUQKsc-unsplash.jpg";
import {NavigationContainer} from '@react-navigation/native';
import styled from "styled-components"

export const Question3 = ({setCorrectAnswer, correctAnswer, navigation}) => {

  const [userAnswer, setUserAnswer] = useState(false);

  return (

    <StyledImageBackground source={image}> 
    <StyledView>

      <StyledTitle>Which store is NOT located in Hogsmeade?</StyledTitle>

      <TouchableOpacity onPress={() => {
        if (userAnswer) {return} 
        else {setCorrectAnswer(correctAnswer +1); setUserAnswer(true)}}}
      >
        <StyledTextButton>Florean Fortescue's Ice Cream Parlour</StyledTextButton>
        <StyledCorrectAnswer userAnswer={userAnswer}>It is owned and operated by Florean Fortescue, and located at Diagon Alley.</StyledCorrectAnswer>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>Zonko's Joke Shop</StyledTextButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>Honeydukes</StyledTextButton>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {setUserAnswer(true); Vibration.vibrate()}}>
        <StyledTextButton userAnswer={userAnswer}>Madam Puddifoot's Tea Shop</StyledTextButton>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => {navigation.navigate('Summary', {name: 'Summary'})}}>
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
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  padding: 0 20px;
`
const StyledTextButton = styled.Text`
  background-color: ${props => props.userAnswer ? "rgba(216, 225, 255, 0.5)" : "rgba(150, 205, 255, 0.9)"}
  font-size: 26px;
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
  font-size: 22px;
  font-weight: bold;
  font-family: monospace;
  width: 350px; 
  padding: 0 20px;
  border-radius: 10px;
`

const StyledButton = styled.Text`
  height: ${props => props.userAnswer ? "35px" : "0px"}
  background-color: rgb(137, 225, 106) ;
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 15;
  padding: 0 20px;
  border-radius: 20px;
`