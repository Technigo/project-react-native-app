import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'

const Container = styled.View`
  margin: 20px;
`

const Quote = styled.Text`
  font-size: 20px;
  background-color: #87e5f5;
  color: black;
  padding: 20px;
  line-height: 30px;
  border-radius: 8px;
  font-weight: 900;
`

const Author = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: 900;
  background-color: #87e5f5;
  color: black;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
`

const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #87e5f5;
  padding: 20px;
  border-radius: 8px;
  font-weight: 900;
`

const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
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
        {isShaking(data) && generateQuote()}
        <Quote>"{quote.content}"</Quote>
        <Author>{quote.author}</Author>
      </Container>
      <View>
        <Button onPress={generateQuote}>
          <ButtonText>Press button for a quote</ButtonText>
        </Button>
      </View>
    </>
  )
}

export default ShakePai
