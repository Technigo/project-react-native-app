import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'

// ==========================
// = Styled components

const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`

const TopContainer = styled.View`
  flex: 1;
  margin-top: 70px;
`

const ShakeTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #F803FF;
  text-shadow-radius: 10;
  text-shadow-color: #000000;
`

const ShakeAlertView = styled.View`
  flex: 2;
`

const ShakeAlert = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #03FF4E;
  text-align: center;
`

const ShakeDataTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  margin-top: 15px;
  color: #03FF4E;
`

const ShakeData = styled.Text`
  text-align: center;
  color: #03FF4E;
`

const BottomContainer = styled.View`
  flex: 1;
`

const ScoreCounter = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #F803FF;
  text-align: center;
  margin-bottom: 20px;
`

const ResetButton = styled.TouchableOpacity`
  margin: 20px 0;
  padding: 10px 30px;
  background-color: #831586;
  align-self: center;
  border-radius: 20px;
  border: 1px #ffffff;
`

const ButtonText = styled.Text`
color: #ffffff; 
font-weight: bold;
`

// ==========================
// = Components

export const SensorComponent = () => {
  // This function determines how often our program reads the accelerometer data in milliseconds
  Accelerometer.setUpdateInterval(400)

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null)

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData)
      })
    )
  }

  // This will tell the device to stop reading Accelerometer data.
  // If we don't do this our device will become slow and drain a lot of battery
  const _unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    // Start listening to the data when this SensorComponent is active
    _subscribe()
    return () => _unsubscribe()
  }, [])

  const currentForce = Math.abs(data.x.toFixed(2)) + Math.abs(data.y.toFixed(2)) + Math.abs(data.z.toFixed(2))

  //This is for the shake alerts
  const isShakingSlow = () => {
    return currentForce > 1.50
  }
  
  const isShakingMedium = () => {
    return currentForce > 2.50; 
  }
  
  const isShakingMediumHard = () => {
    return currentForce > 3.50; 
  }
  
  const isShakingHard = () => {
    return currentForce > 4.50; 
  }
  
  //This is the score calculator
  const [score, setScore] = useState(0)
  
  const currentScore = () => {
    if (currentForce > 4.50) 
      setScore(score + 1 ) 
  }

  useEffect (() => {
    currentScore()
  }, [currentForce])

  return (
    <ShakeView>
      <TopContainer>
        <ShakeTitle>Start shaking!</ShakeTitle>
        <ShakeDataTitle>Current shake force</ShakeDataTitle>
        <ShakeData> {currentForce} </ShakeData>
      </TopContainer>
      <ShakeAlertView>
          {isShakingSlow(data) && <ShakeAlert>Shake harder!</ShakeAlert>}
          {isShakingMedium(data) && <ShakeAlert>Harder!</ShakeAlert>}
          {isShakingMediumHard(data) && <ShakeAlert>HARDER!</ShakeAlert>}
          {isShakingHard(data) && <ShakeAlert>There you go!</ShakeAlert>}
      </ShakeAlertView>
      <BottomContainer>
        <ScoreCounter>Score: {score}</ScoreCounter>
        <ResetButton onPress={() => setScore(0)}>
          <ButtonText>RESET</ButtonText>
        </ResetButton>
      </BottomContainer>
    </ShakeView>
  )
}