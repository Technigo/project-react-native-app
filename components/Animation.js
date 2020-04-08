import React from "react"
import LottieView from "lottie-react-native"


const Animation = () => {
  return (
    <LottieView style={{ width: 400, height: 400 }} source={require('../assets/walking.json')} autoPlay loop />
  )
}

export default Animation