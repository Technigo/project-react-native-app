import React from "react"
import { View } from "react-native"
import LottieView from "lottie-react-native"

const Loading = () => {

  return (
    <View>
      <LottieView
        source={require("../assets/food-animation.json")}
        style={{
          width: 150,
          height: 150
        }}
      />
    </View>
  )
}

export default Loading