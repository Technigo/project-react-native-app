import React, { Component, useEffect, useState } from "react"
// import styled from "styled-components/native"
import { Accelerometer } from "expo-sensors"

import Data from "./Data"

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native"

const Shake = props => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [subscription, setSubscription] = useState(null)
  const [shake, setShake] = useState(props.press)
  const [pokemon, setPokemon] = useState({})
  const [pokemonArray, setPokemonArray] = useState([])

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000)
    subscribe()
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (isShakingEnough(data)) {
      setShake(true)
    }
  }, [data])

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData)
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  const isShakingEnough = () => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
  }

  const speed = () => {
    Accelerometer.setUpdateInterval(1000)
  }

  const { x, y, z } = data

  return (
    <>
      <Text>Skaka telen</Text>

      {shake && (
        <>
          <Text>Det går bra nu</Text>
          <Data />
        </>
      )}
    </>
  )
}

export default Shake
