import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'

import { MAGIC_API_single } from '../reusable/urls'

import { ShakeView, ShakeAlert, ShakeDataView, InterShakeDataTitle, MagicBall } from '../StyledComponents/ShakeSensorStyling'

// FUNCTIONS
// The total combined force on the device
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
  // If this force exceeds some threshold, return true, otherwise false
  // Increase this threshold if you need your user to shake harder
  return totalForce > 1.78
}

// This function determines how often our program reads the accelerometer data in milliseconds
// https://docs.expo.io/versions/latest/sdk/accelerometer/#accelerometersetupdateintervalintervalms 
export const ShakeSensor = () => {
  Accelerometer.setUpdateInterval(400);
  
  // Accelerometer returns three numbers (x,y,z) which represent the force currently applied to the device
  const [data, setData] = useState({ x: 0, y: 0, z: 0, })
  
  // Keep track of whether we are listening to the Accelerometer data
  const [subscription, setSubscription] = useState(null)

  const [magicAnswer, setMagicAnswer] = useState({})// Tried setting useState to undefined, but got a black screen. 

  const _subscribe = () => {
    // Save the subscription so we can stop using the accelerometer later
    setSubscription(
      // This is what actually starts reading the data
      Accelerometer.addListener((accelerometerData) => {
        // Whenever this function is called, we have received new data
        setData(accelerometerData)
      })
    )
  }
  // This will tell the device to stop reading Accelerometer data, otherwise our device will become slow and drain a lot of battery
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
  
  useEffect(() => {
  isShaking(data) && fetch(MAGIC_API_single)
    .then(res => res.json())
    .then(magicdata => setMagicAnswer(magicdata))
    .catch(err => console.error(err))
  }, [isShaking(data)])

  if (magicAnswer === undefined) {
    return <></>
  }

  const [fontsLoaded] = useFonts({
    'Inter_500Medium': require('../assets/fonts/Inter_500Medium.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  } else {
  return (
    <ShakeView>
      <ShakeDataView>
        <InterShakeDataTitle>
          {!magicAnswer ? "Didn't like the answer? Shake it up and try again!" : "Ask a question and shake me to get your magic answer!"}
        </InterShakeDataTitle>
        <MagicBall
          source={require('../assets/magic-ball.png')}
          accessibilityLabel='Pink prophecy ball'
          style={{
            resizeMode: 'cover',
          }}
        />
        {magicAnswer ? <ShakeAlert>{magicAnswer.Answer}</ShakeAlert> : <></>}
      </ShakeDataView>
    </ShakeView>
  )
  }
}