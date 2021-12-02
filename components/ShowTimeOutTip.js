import React, { useState, useEffect } from 'react'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components/native'

const isShakingEnough = (data) => {
  const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
  return totalForce > 1.78
}

// = Styled components
const ShakeView = styled.View`
  background-color: magenta;
  justify-content: center;
  align-items: center;
`;

const ShakeText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: yellow;
`;

export const ShowTimeOutTip = () => {
  Accelerometer.setUpdateInterval(400);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  
  const [todaysTip, setTodaysTip] = useState('');
  let tips = [
	  "Go for a walk",
	  "Take a bath",
	  "SNHK (sitt ned och håll käften)",
	  "Call a friend",
	  "Do nothing",
	  "Stretch your body"
	]
  
  useEffect(() => {
    if (isShakingEnough(data)){
      setTodaysTip("Picking tip")
      setTimeout(() => {setTodaysTip(tips[Math.floor(Math.random()*tips.length)])}, 1000)
    }
  }, [data])

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
      <ShakeText>{todaysTip}</ShakeText>
    </ShakeView>
  )
}