import React from 'react'
import LottieView from 'lottie-react-native'
// import animationData from '../.expo/animations/loading.json'

export const Loading = () => {
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice',
  //     },
  //   }

  return (
    <LottieView
      source={require('../.expo/animations/loading.json')}
      //   options={defaultOptions}
    />
  )
}
// export default class Loading extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       progress: new Animated.Value(0),
//     }
//   }

//   componentDidMount() {
//     Animated.timing(this.state.progress, {
//       toValue: 1,
//       duration: 5000,
//       easing: Easing.linear,
//     }).start()
//   }

//   render() {
