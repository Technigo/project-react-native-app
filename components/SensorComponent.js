import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'

const isShaking = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);

  return totalForce > 1.78
}

// = Styled components
const ShakeView = styled.View`
  display: flex;
  flex-direction: column;
`

const ShakeAlert = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #aa0000;
`
const ShakeDataView = styled.View``
const ShakeDataTitle = styled.Text`
  font-weight: bold;
`
const ShakeData = styled.Text``

export const SensorComponent = () => {
  Accelerometer.setUpdateInterval(400);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })

  const [subscription, setSubscription] = useState(null)

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  useEffect(() => {
    subscribe()

    return () => unsubscribe()
  }, [])

  return (
    <ShakeView>
      {/* 
      If isShaking returns true:
        - We could render conditionally
        - Maybe we want to dispatch some redux event when device shakes?
        - Maybe change some styled props? 
      */}
      {isShaking(data) && <ShakeAlert>Shaking</ShakeAlert>}
    </ShakeView>
  )
}