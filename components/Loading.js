import React, { useRef } from "react"
import { TouchableOpacity } from "react-native"
import LottieView from "lottie-react-native"

const Loading = () => {

  const loadingAnimation = useRef()

  return (
    <LottieView
      source={require("../assets/animation.json")}
      style={{
        width: 150,
        height: 150
      }}
    />
  )
}

export default Loading