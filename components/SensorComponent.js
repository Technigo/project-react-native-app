import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'

// Functions
const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
  return totalForce > 1.2
};

// Styled components
const ShakeView = styled.View`
  flex: 1;
  background-color: #1C1C1C;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StartTitle = styled.Text`
font-size: 36px;
font-weight: bold;
color: #54D9EF;
justify-content: center;
align-items: center;
font-size: 70px;
text-align: center;
margin: 20px;
`

const StartParagraph= styled.Text`
font-size: 36px;
font-weight: bold;
color: papayawhip;
justify-content: center;
align-items: center;
font-size: 20px;
text-align: center;
margin: 20px;
`

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #EC3F59;
`

export const SensorComponent = () => {
  // Function that determines how often the program reads the accelerometer data in milliseconds
  Accelerometer.setUpdateInterval(400);

  // The force currently applied to the device
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    )
  }

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  }

  useEffect(() => {
    _subscribe()
    return () => _unsubscribe();
  }, [])

  const [recipe, setRecipe] = useState('')

  let recipeArray = ['Pizza', 'Pasta', 'Soup', 'Sallad']

  useEffect(() => {
    isShaking(data) && setRecipe(recipeArray[Math.floor(Math.random()*recipeArray.length)])
}, [isShaking(data)])

  return (
    <ShakeView>
      <StartTitle>What should I eat?</StartTitle>
      <StartParagraph>Shake me to get a suggestion</StartParagraph>
        <ShakeAlert>{recipe}</ShakeAlert>
    </ShakeView>
  )
}
