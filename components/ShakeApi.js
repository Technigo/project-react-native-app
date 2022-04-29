import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'

const Container = styled.View`
  flex: 1;
  background-color: #1c1e1e;
  align-items: center;
`

const ConfuciusQuote = styled.Text`
  font-size: 1 em;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1em;
`

const Confucius = styled.Text`
  color: #white;
  background-color: blue;
  padding: 1em;
  border-radius: 7%;
`

const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #d885a3;
  padding: 1em;
  border-radius: 5%;
  margin-top: 20px;
`

const ButtonText = styled.Text`
  font-size: 1em;
  color: white;
`
const BackgroundImage = styled.ImageBackground`
  flex: 1;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const ShakePai = () => {
  const [quote, setQuote] = useState({})

  const generateQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuote(data))
  }

  useEffect(() => {
    generateQuote()
  }, [])

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const [subscription, setSubscription] = useState(null)

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      }),
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    // Component mounts, execute the function below:
    subscribe()

    // Component unmounts below, execute the function in the return statement below:
    return () => unsubscribe()
  }, [])

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 2
  }

  useEffect(() => {
    if (isShaking(data)) {
      generateQuote()
    }
  }, [data])

  return (
    <>
      <Container>
        <BackgroundImage
          source={require('../assets/Confucius.jpg')}
        ></BackgroundImage>
        {isShaking(data) && generateQuote()}
        <ConfuciusQuote>"{quote.content}"</ConfuciusQuote>
        <Confucius>{quote.author}</Confucius>
      </Container>
      <View>
        <Button onPress={generateQuote}>
          <ButtonText>What would Confucius say</ButtonText>
        </Button>
      </View>
    </>
  )
}

export default ShakePai
