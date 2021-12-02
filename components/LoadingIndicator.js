import React from 'react'
import Lottie from 'lottie-react-native'
import * as loading from '../animations/loading.json'
// import { useSelector } from 'react-redux'
import { flatten } from 'lottie-colorify'

export const LoadingIndicator = () => {
  //   const loading = useSelector((store) => store.ui.loading)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  // animationData flatten replaces all previous colors with one color, #000000

  return <Lottie options={defaultOptions} height={300} width={300} />
}
