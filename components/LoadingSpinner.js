import React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet } from 'react-native'
import animationData from '../assets/loading.json'

// const styles = StyleSheet.create({
//   animation: {
//     width: 200,
//     height: 200,
//   },
// })
export const LoadingSpinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <LottieView
      source={require('../assets/loading.json')}
      //   style={styles.animation}
      options={defaultOptions}
    />
  )
}
