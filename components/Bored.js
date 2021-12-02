import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"

import styled from "styled-components/native"
import { Accelerometer } from "expo-sensors"

import { BORED_URL } from "../utils/Urls"

const ActivityText = styled.Text`
  font-size: 18px;
  margin-top: 40%;
  color: black;
  text-align: center;
`
const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin-bottom: 20px;
  text-align: center;
`

export const Bored = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [activity, setactivity] = useState({})
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null)

  const generateMovie = () => {
    setLoading(true)
    fetch(BORED_URL)
      .then((res) => res.json())
      .then((data) => setactivity(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    generateMovie()
  }, [])

  useEffect(() => {
    if (isShaking(data)) {
      generateMovie()
    }
  }, [data])

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000)
    subscribe()
    return () => unsubscribe()
  }, [])

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

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)

    return totalForce > 1.78
  }

  if (loading) {
    return <ActivityIndicator />
  }

  const { x, y, z } = data

  return (
    <View>
      <Title>Shake for activity suggestion!</Title>
      <ActivityText>Activity: {activity.activity}</ActivityText>
      <ActivityText>category: {activity.type}</ActivityText>
    </View>
  )
}
