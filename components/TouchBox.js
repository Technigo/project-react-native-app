import React, { useState } from 'react';

import styled from 'styled-components/native'
import { Button, TouchableOpacity, Text, View } from 'react-native';

const TouchBox = styled.TouchableOpacity`
  width: 350px;
  height: 350px;
  background-color: #006DEE;
  border-radius: 4px;  
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoxText = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
`;

export const TouchBoxContainer = () => {
  const [gameState, setGameState] = useState("start")
  // const boxTextBoxText = document.getElementById("boxTextBox")

  // Need to create the startTimer var
  let timerValue;

  // GAME STATES 
  // start:     BEFORE PRESSING BUTTON.
  // playing:   AFTER 1ST PRESSING BUTTON. CALL THE TIMER HERE.
  // // // // // I DON'T THINK THIS IS NEEDED?? toofast:   WHEN 'PLAYING', BUT BEFORE TIMER HAS ENDED.
  // pressnow:  WHEN 'PLAYING', BUT AFTER TIMER HAS ENDED.
  // win:       WHEN 'PRESSNOW' IS ACTIVE. 

  const startToPlaying = () => {
    console.log(`>>> Inside startToPlaying()`)
    console.log(`Game state: ${gameState}`)
    calculateRandomTimer();
  }

  const calculateRandomTimer = () => {
    console.log(`>>> Inside calculateRandomTimer – game state is: ${gameState}`)
    let time = Math.floor(Math.random() * 5000) + 2000  
    console.log(`random time is: ${time}ms`)
    timerValue = setTimeout(playingToPressnow, time);
  }

  const playingToPressnow = () => {
    setGameState(`pressnow`)
    console.log(`Press now! ${gameState}`);
  }

  const handleState = () => {
    if (gameState === 'start') {
      setGameState(`playing`)
      clearTimeout(timerValue)
      console.log(`Gamestate should be "start". It is ${gameState}`)
      startToPlaying()

    } else if (gameState === 'playing') {
      
      setGameState(`toofast`)
      // Cancel the timerValue timeout
      clearTimeout(timerValue)
      console.log(`Too fast. Gamestate should be "playing". It is ${gameState}`)

    } else if (gameState === 'toofast') {
      setGameState(`start`)
      clearTimeout(timerValue)
      console.log(`Gamestate should be "toofast". It is ${gameState}`)

    } else if (gameState === 'pressnow') {
      clearTimeout(timerValue)
      setGameState(`win`)
      console.log(`Gamestate should be "pressnow". It is ${gameState}`)

    } else if (gameState === 'win') {
      clearTimeout(timerValue)
      console.log(`Gamestate should be "win". It is ${gameState}`)
      setGameState('start')

    }
  }

  return (
    <TouchBox onPress={handleState}>
    <View>
      <BoxText id="boxTextBox">{gameState}</BoxText>
    </View>
  </TouchBox>
  )
}