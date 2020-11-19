import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { Accelerometer } from 'expo-sensors'
import styled from 'styled-components'

import { TealContainer } from './TealContainer'
import { BodyTextStyle } from '../components/BodyTextStyle'
import { Title } from './Title'
import { Footer } from './Footer'
import img from '../assets/placeholder.png'
import { Randomizer } from './Randomizer'

const MovementDetected = styled.Text`
    ${(props) => `transform: translate(${props.xOffset}px, ${props.yOffset}px) `}
  `
const StartState = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  })

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
      <Title>Shake to load a random villager</Title>
      <Image source={img} />
      <Randomizer />

      <MovementDetected xOffset={xOffset} yOffset={yOffset}>
        Shake to load a random villager.
      </MovementDetected>
      
      <BodyTextStyle>
        x: {x} y: {y} z: {z} 
      </BodyTextStyle>

      <Footer />
    </TealContainer>
  )
}

export default StartState


{/* 
 this should have the listener and accelerameter to trigger 
 
 ON SHAKE:

 1. api call > 
  see array > 
    randomizer > 
      display VillagerInfo
      push character data into VillagerInfo
      AND be ready to detect next shake event

  2. footer disappears

    const [villager, setVillager] = useState()

*/}