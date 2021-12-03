import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'
import * as Haptics from 'expo-haptics'

const QuoteText = styled.Text`
  font-weight: 700;
`

export const ShakeApi = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
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
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    }
  }, [data])

  const generateQuote = () => {
    setLoading(true)
    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then(res => setQuote(res))
      .finally(() => setLoading(false))
  }

  const subscribe = () => {
    setSubscription(Accelerometer.addListener(accelerometerData => setData(accelerometerData)))
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  const isShakingEnough = data => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.55
  }

  const { x, y, z } = data

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Quote: {quote.author}</Text>
    </View>
  )
}
