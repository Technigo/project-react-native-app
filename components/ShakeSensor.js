import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'

import getData from '../data/magicanswer'

// import magicanswer from '../data/magicanswer'

import { StartPage } from './StartPage'

// FUNCTIONS: 
let magicanswer

const someFunc = () => {
  getData().then((magicdataobjects) => {
    // console.log(magicdataobjects) //take away *
    magicanswer = magicdataobjects
    })
  // .catch(err => console.error(err)) // take away catch or add an error message *  */
}

// The total combined force on the device
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 1.5
}

const randomAnswer = (number) => {
  return Math.floor(Math.random() * number)
}

// Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`;

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #aa0000;
`;
const ShakeDataView = styled.View``;
const ShakeDataTitle = styled.Text`
  font-weight: bold;
`;
const ShakeData = styled.Text``;

// This function determines how often our program reads the accelerometer data in milliseconds
// https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
export const ShakeSensor = () => {
  Accelerometer.setUpdateInterval(400);

  const [answer, setAnswer] = useState(undefined)

  // The accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
/*   const [data, setData] = useState({ x: 0, y: 0, z: 0, }) */

  // This keeps track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        if (isShaking(accelerometerData)) {
          const answerIndex = randomAnswer(magicanswer.length)
          setAnswer(magicanswer[answerIndex].Answer)
        }
      })
    )
  }

  // This will tell the device to stop reading Accelerometer data otherwise our device will become slow and drain a lot of battery
  const _unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    // Start listening to the data when this SensorComponent is active
    _subscribe()
    // Stop listening to the data when we leave SensorComponent
    return () => _unsubscribe()
  }, [])

{/* 
      If isShaking returns true:
        - We could render conditionally
        - Maybe we want to dispatch some redux event when device shakes?
        - Maybe change some styled props? 

                <ShakeData>X: {data.x.toFixed(2)}</ShakeData>
        <ShakeData>Y: {data.y.toFixed(2)}</ShakeData>
        <ShakeData>Z: {data.z.toFixed(2)}</ShakeData>
*/}
  return (
    <ShakeView>
      <ShakeDataView>
        <ShakeDataTitle>
          {answer ? "Ask me another question shake again" : "Ask me a yes / no question and shake me for an answer"}
        </ShakeDataTitle>
          {answer ? <ShakeAlert>{answer}</ShakeAlert> : null}
      </ShakeDataView>
    </ShakeView>
  )
}