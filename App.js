import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { DeviceMotion } from "expo-sensors"

const quotes = ["one", "two", "three"]

const App = () => {
  const [quote, setQuote] = useState()

  let subscription = null

  const subscribe = () => {
    subscription = DeviceMotion.addListener(motionData => {
      if (
        motionData.rotationRate.alpha > 13 ||
        motionData.rotationRate.alpha < -13
      ) {
        showRandomQuote()
      }
    })
    DeviceMotion.setUpdateInterval(1000)
  }

  const unsubscribe = () => {
    subscription.remove()
  }

  useEffect(() => {
    subscribe()

    return () => {
      unsubscribe()
    }
  }, [])

  const showRandomQuote = () => {
    const randomIndex = Math.round(Math.random() * (quotes.length - 1))
    setQuote(quotes[randomIndex])
  }

  return (
    <Container>
      <Image resizeMode='contain' source={require("./assets/logo.png")} />
      <Title>Say goodbye to awkward silence</Title>
      <Subtitle>
        This app will always be by your side and help you find, if not the right
        thing, at least something to say!
      </Subtitle>
      <Subtitle>Spin your phone to get a quote!</Subtitle>
      <Subtitle>{quote}</Subtitle>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`
const Image = styled.Image`
  height: 300;
  margin-bottom: 100;
`

const Title = styled.Text`
  font-size: 24px;
  color: white;
  margin-bottom: 20;
`
const Subtitle = styled.Text`
  font-size: 18px;
  color: white;
  padding: 10px 50px;
  text-align: center;
`

const Button = styled.TouchableOpacity`
  background-color: white;
  border-radius: 50;
  text-align: center;
  padding: 10px 20px;
  margin-top: 30;
`

export default App
