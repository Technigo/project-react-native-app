import React from "react"
import { Image } from "react-native"


const Animation = () => {
  return (
    <Image
      style={{ width: 350, height: 350 }}
      source={require("../assets/walking.gif")} />
  )
}

export default Animation