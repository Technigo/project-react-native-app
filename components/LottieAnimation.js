import React from 'react'
import LottieView from 'lottie-react-native'

export const LottieAnimation = () => {
  return (
    <LottieView
      style={{ width: 300, height: 300 }}
      source={require('../assets/animation.json')}
      autoPlay
    />
  )
}
