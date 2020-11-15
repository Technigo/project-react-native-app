import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'
import { TealContainer } from '../components/TealContainer'
import { BodyTextStyle } from '../components/BodyTextStyle'


const MovementDetected = styled.Text`
    ${(props) => `transform: translate(${props.xOffset}px, ${props.yOffset}px) `}
  `

const Home = () => {
  const [data, setData] = useState({})
  let { x, y, z } = data
  let xOffset = x * 60 || 0
  let yOffset = y * -120 || 0

  useEffect(() => {
    Accelerometer.setUpdateInterval(120)
    const shake = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData)
    })
    return () => {
      shake && shake.remove()
    }
  }, [])

  return (
    <TealContainer>
      <MovementDetected xOffset={xOffset} yOffset={yOffset}>
        Shake to load a random villager.
      </MovementDetected>
      
      <BodyTextStyle>
        x: {x} y: {y} z: {z} 
      </BodyTextStyle>
    </TealContainer>
  )
}

export default Home


{/* 
  Home is a control to see if accelerometer is sensing anything.
*/}