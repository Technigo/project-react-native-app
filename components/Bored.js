import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"

import styled from "styled-components/native"
import { Accelerometer } from "expo-sensors"

import { BORED_URL } from "../utils/Urls"

const Flexbox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  margin-top: 15%;
  font-weight: 700;
  font-size: 22px;
  color: #edb506;
  text-align: center;
`

const ActivityText = styled.Text`
  font-size: 18px;
  color: white;
  text-align: center;
  font-weight: 700;
`

const CategoryText = styled.Text`
  font-size: 18px;
  color: white;
  text-align: center;
  margin-top: 10px;
`

const Container = styled.View`
  margin-top: 10%;
  background-color: #edb506;
  height: 320px;
  width: 320px;
  border-radius: 500;
  display: flex;
  justify-content: center;
`

const ShakeImage = styled.Image`
  margin-top: 10px;
  width: 50px;
  height: 50px;
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
    <Flexbox>
      <Title>Shake me for activity suggestion!</Title>
      <ShakeImage source={require("../assets/shake.png")} />
      <Container>
        <ActivityText>{activity.activity}</ActivityText>
        <CategoryText>Category: {activity.type}</CategoryText>
      </Container>
    </Flexbox>
  )
}
