import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'

const image = {
  uri: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
  },
})

const Container = styled.View`
  flex: 1;
  justify-content: center;
`

const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
  margin: 20px;
  text-shadow: 2px 2px 5px white;
`

const QuoteContainer = styled.View`
  border: 2px solid black;
  height: auto;
  padding: 20px;
  margin: 50px;
`

const QuoteText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  font-style: italic;
  text-align: center;
  text-shadow: 2px 2px 5px white;
`

const API = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null)

  useEffect(() => {
    generateQuote()
  }, [])

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000)
    subscribe()
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (isShakingEnough(data)) {
      generateQuote()
    }
  }, [data])

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  const generateQuote = () => {
    setLoading(true)
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false))
  }

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
  }

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <Container>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <Text style={styles.text}>This is a image component</Text> */}
        <HeaderText>
          {' '}
          Shake your phone to generate a api request and get a random qoute
          back.
        </HeaderText>
        <QuoteContainer>
          <QuoteText>Quote: {quote.content}</QuoteText>
          <QuoteText>Author: {quote.author}</QuoteText>
        </QuoteContainer>
      </ImageBackground>
    </Container>
  )
}

export default API
