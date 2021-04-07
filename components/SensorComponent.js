import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'

import EightballAnswer from './EightballAnswer'
import EightballHidden from './EightballHidden'
// import { getStepCountAsync } from 'expo-sensors/build/Pedometer'

// ==========================
// = Functions
const isShaking = (data) => {
  // x,y,z CAN be negative, force is directional
  // We take the absolute value and add them together
  // This gives us the total combined force on the device
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)

  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 1.78
}

// ==========================
// = Styled components
const MainView = styled.View`
  justify-content: center;
  align-items: center;
`

export const SensorComponent = () => {

  // This function determines how often our program reads the accelerometer data in milliseconds
  // https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms
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
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        // The frequency of this function is controlled by setUpdateInterval
        setData(accelerometerData)
      })
    )
  }

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

  const AnswersArray = ['It is certain', 'Without a doubt', 'You may rely on it', 'Yes definitely', 'It is decidedly so', 'As I see it yes', 'Most likely', 'Yes', 'Outlook good', 
  'Signs point to yes', 'Reply hazy try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 
  'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no']

  const [answer, setAnswer] = useState('')

  useEffect(() => {
    !isShaking(data) && setAnswer(AnswersArray[Math.floor(Math.random() * AnswersArray.length)])
  }, [isShaking(data)])

  return (
    <MainView>

      {isShaking(data) && 
        <EightballHidden />
      }
      {!isShaking(data) && 
        <EightballAnswer newAnswer={answer}/>
      }
    </MainView>
  )
}
