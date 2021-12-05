import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
// import { Accelerometer } from 'expo-sensors'

const Container = styled.View`
  width: 100%;
  justify-content: center;
  margin: auto;
  align-items: center;
`
const FortuneText = styled.Text`
  font-weight: 700;
  font-size: 40px;
  color: black;
  text-align: center;
`
const FortuneButton = styled.TouchableOpacity`
  background-color: red;
  padding: 20px;
  border-radius: 10px;
  align-content: center;
`

const Fortune = () => {
  //   const [data, setData] = useState({
  //     x: 0,
  //     y: 0,
  //     z: 0,
  //   })
  const [fortune, setFortune] = useState({})
  const [loading, setLoading] = useState(false)
  //   const [subscription, setSubscription] = useState(null)

  // useEffect(() => {
  //   generateFortune()
  // }, [])

  //   useEffect(() => {
  //     Accelerometer.setUpdateInterval(1000)
  //     subscribe()
  //     return () => unsubscribe()
  //   }, [])

  //   useEffect(() => {
  //     if (isShakingEnough(data)) {
  //       generateFortune()
  //     }
  //   }, [data])

  //   const subscribe = () => {
  //     setSubscription(
  //       Accelerometer.addListener((accelerometerData) => {
  //         setData(accelerometerData)
  //       })
  //     )
  //   }

  //   const unsubscribe = () => {
  //     subscription && subscription.remove()
  //     setSubscription(null)
  //   }

  const generateFortune = () => {
    // setLoading(true)
    fetch('http://yerkee.com/api')
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => setFortune(data))
    // .finally(() => setLoading(false))
  }

  //   const isShakingEnough = (data) => {
  //     const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
  //     return totalForce > 1.78
  //   }

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <Container>
      <FortuneButton onPress={generateFortune}>
        <Text>See your fortune</Text>
      </FortuneButton>
      <FortuneText> Random Fortune: {fortune?.message} </FortuneText>
    </Container>
  )
}

export default Fortune
