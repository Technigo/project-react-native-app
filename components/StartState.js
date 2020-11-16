import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { TealContainer } from './TealContainer'
import { BodyTextStyle } from './BodyTextStyle'
import { Title } from './Title'
import { Footer } from './Footer'
import img from '../assets/placeholder.png'
import Home from './Home'
import { Randomizer } from './Randomizer'

const StartState = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  })

  

  return (
    <TealContainer>
      <Title>Shake to load a random villager</Title>
      <Image source={img} />
      <Randomizer />
      <Home />
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