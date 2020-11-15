import React, { useState } from 'react'

import styled from 'styled-components/native'
import { View } from 'react-native'

let red = "#EE0056"
let blue = "#006DEE"
let green = "#00BD57"
let boxColor = blue

// reactionTime0 is the current time when "press now" shows. Redefined when function waitToPressnow is active.
// reactionTime1 is the current time when the "win" shows. Redefined when function pressnowToWin is active.
let reactionTime0
let reactionTime1

// >>> ------------------------------------------------------------------------------------------------------------------------------ <<<

export const TouchBoxContainer = () => {
  // Declare the TouchBox. Putting it here to force a reload on each re-render (had to do this due to color change working.)
  const TouchBox = styled.TouchableOpacity`
    width: 350px;
    height: 350px;
    background-color: ${boxColor};
    border-radius: 4px;
    margin-bottom: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
  `
  const BoxText = styled.Text`
    font-size: 28px;
    color: #fff;
    font-weight: bold;
    text-align: center;
  `

  // State hooks with the state of the game. When pressing the box, handle logic depending on the state.
  const [gameState, setGameState] = useState("pregame")
  const [durationTimer, setDurationTimer] = useState()
  const [boxText, setBoxText] = useState("Welcome! Press me to start.")

  // >>> GAME STATES <<<
  // pregame:      BEFORE PRESSING BUTTON. Landing page, sort of.
  // wait:         AFTER 1ST PRESSING BUTTON. CALL THE 1st TIMER HERE.
  // lose:         WHEN 'WAIT' and pressing, BEFORE TIMER HAS ENDED.
  // pressnow:     START 2nd TIMER HERE. WHEN 'PRESSNOW' is active (set this AFTER TIMER HAS ENDED).
  // win:          WHEN PRESSING AFTER 'PRESSNOW' IS BEEN SHOWN. (stop 2nd timer.)

  const waitText = "Wait for it! Press me when I turn green."
  const loseText = "Whoa, hold your horses – you were a bit too fast. Press to play again."
  const pressnowText = "Press now!"

  // Timer functions:
  function startWaitingDuration() {
    let randomDuration = Math.floor(Math.random() * 3000) + 2000
    setDurationTimer(setTimeout(waitToPressnow, randomDuration))
    console.log(`Starting ${randomDuration}ms timer.`)
  }

  function stopWaitingDuration() {
    console.log("Stopping.")
    clearTimeout(durationTimer)
  }

  // >>> ------------------------------------------------------------------------------------------------------------------------------ <<<
  // >>> Main functions to handle logic between states. It's mostly about stopping/starting the timer, changing box color, and handling what to show on the page.

  const pregameToWait = () => {
    console.log(`>>>INSIDE pregameToWait`)
    setGameState(`wait`)
    startWaitingDuration()
    setBoxText(waitText)
    boxColor = red
  }

  const waitToPressnow = () => {
    // Start reaction timer by setting reactionTime0 to Date.now(). Reaction time will be calculated by reactionTime1-reactionTime0.
    reactionTime0 = Date.now()

    boxColor = green
    setGameState(`pressnow`)
    setBoxText(pressnowText)
  }

  const pressnowToWin = () => {
    // Stop reaction timer by setting reactionTime1 to Date.now().
    reactionTime1 = Date.now()

    setGameState(`win`)
    stopWaitingDuration()
    setBoxText(`Well done! Your reaction time was ${reactionTime1 - reactionTime0}ms. Press me to try again.`)
    boxColor = blue  
  }

  const waitToLose = () => {

    setGameState(`lose`)
    stopWaitingDuration()
    setBoxText(loseText)
    boxColor = blue
  }

  const winToPregame = () => {
    pregameToWait()
    boxColor = blue
  }

  const loseToPregame = () => {
    pregameToWait()
    boxColor = blue
  }

  // >>> ------------------------------------------------------------------------------------------------------------------------------ <<<

  const handleState = () => {
    // >>> If the state WHEN CLICKING is X, then: {...} <<<

    if (gameState === 'pregame') {
      pregameToWait()

    } else if (gameState === 'wait') {
      waitToLose()

    } else if (gameState === 'lose') {
      loseToPregame()

    } else if (gameState === 'pressnow') {
      pressnowToWin()

    } else if (gameState === 'win') {
      winToPregame()
    }
  }

  // >>> ------------------------------------------------------------------------------------------------------------------------------ <<<

  return (
      <TouchBox onPress={handleState}>
        <View>
          <BoxText id="boxTextBox">{boxText}</BoxText>
        </View>
      </TouchBox>
  )
}