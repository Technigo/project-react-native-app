import React, { useState } from "react"
import { Text, View, Image, StyleSheet, Pressable } from "react-native"
import { withTheme } from "styled-components/native"
import Data from "./Data"

const Start = () => {
  const [change, SetChange] = useState(false)

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.button} onPress={() => SetChange(true)}>
        <Text style={styles.text}>Start game!</Text>
      </Pressable>
      <Image style={styles.image} source={require("../assets/1ab7.gif")} />
      {change && <Data />}
    </View>
  )
}

export default Start

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  image: {
    height: 300,
    width: 300,
  },

  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    width: 400,
    marginBottom: 30,
  },
})
