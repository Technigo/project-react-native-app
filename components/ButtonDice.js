import react, { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, Button } from "react-native"

const ButtonDice = () => {
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

  const [endNrDice, setEndNrDice] = useState(require("../assets/endNrs_1.png"))
  const [backgroundColor, setBackgroundColor] = useState("#f3b158")

  const setDice = () => {
    const randomNr = Math.floor(Math.random() * 5)
    setEndNrDice(diceSpin)
    setTimeout(() => setEndNrDice(endNrsDices[randomNr]), 3000)
    setTimeout(() => setBackgroundColor(backgroundColors[randomNr]), 3000)

    // console.log(endNrsDices[randomNr])
    // console.log(backgroundColors[randomNr])
  }

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
      <Button title="Roll The Dice" onPress={() => setDice()}></Button>
      <StatusBar style="auto" />
    </View>
  )
}

export default ButtonDice

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// })
