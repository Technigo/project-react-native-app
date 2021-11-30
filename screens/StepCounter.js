// import React, { useEffect, useState} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Pedometer } from 'expo-sensors';

// export default StepCounter = () => {
//   initialState = {
//     isPedometerAvailable: 'checking',
//     pastStepCount: 0,
//     currentStepCount: 0,
//   }

//   const [step, setStep] = useState (0)
//   const [subscription, setSubscription] = useState(null)

//   useEffect(() => {
//     setStep()
// }, {})

//     componentDidMount(() => {
//         this._subscribe()
//     })

//     componentWillUnmount(() => {
//         this._unsubscribe()
//     })

//     subscribe = () => {
//         this.subscription = Pedometer.watchStepCount(result => {
//         this.setState({
//         currentStepCount: result.steps,
//       })
//     })
//     }

//     unsubscribe = () => {
//         this.subscription && this.subscription.remove()
//         this.subscription = null;
//     }

//     Pedometer.isAvailableAsync()
//         .then(
//         result => {
//         this.setState({
//           isPedometerAvailable: String(result),
//         })
//       },
//       error => {
//         this.setState({
//           isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
//         })
//       }
//     )

//     const end = new Date()
//     const start = new Date();

//     start.setDate(end.getDate() - 1)

//     Pedometer.getStepCountAsync(start, end)
//         .then(
//         result => {
//         this.setState({ pastStepCount: result.steps })
//       },
//       error => {
//         this.setState({
//           pastStepCount: 'Could not get stepCount: ' + error,
//         })
//       }
//     )

//     return (
//         <View style={styles.container}>
//           <Text>Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}</Text>
//           <Text>Steps taken in the last 24 hours: {this.state.pastStepCount}</Text>
//           <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
//         </View>
//       )
//   }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
