import React, { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, Button } from "react-native"
import { Accelerometer } from 'expo-sensors'

const ShakeDice = () => {
  const endNrsDices = [
    require("../assets/endNrs_1.png"),
    require("../assets/endNrs_2.png"),
    require("../assets/endNrs_3.png"),
    require("../assets/endNrs_4.png"),
    require("../assets/endNrs_5.png"),
    require("../assets/endNrs_6.png"),
  ]
  const diceSpin = require("../assets/diceSpin2.gif")

  const backgroundColors = [
    "#f3b158",
    "#73c9e4",
    "#94CBA2",
    "#ED6967",
    "#FCF07E",
    "#C6C6C6",
  ]
  const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
  })
  const [endNrDice, setEndNrDice] = useState(require("../assets/endNrs_1.png"))
  const [backgroundColor, setBackgroundColor] = useState("#f3b158")
  const [subscription, setSubscription] = useState(null)

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000)
    subscribe()
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (isShakingEnough(data)) {
        setDice()
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

  const setDice = () => {
    const randomNr = Math.floor(Math.random() * 5)
    setEndNrDice(diceSpin)
    setTimeout(() => setEndNrDice(endNrsDices[randomNr]), 3000)
    setTimeout(() => setBackgroundColor(backgroundColors[randomNr]), 3000)

    // console.log(endNrsDices[randomNr])
    // console.log(backgroundColors[randomNr])
  }

  const isShakingEnough = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
    return totalForce > 1.78
  }

  const { x, y, z } = data

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor,
      }}
    >
      <Text>Dice!!!</Text>
      <Image source={endNrDice} />
      <StatusBar style="auto" />
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// })

export default ShakeDice