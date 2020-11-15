import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'

import { TealContainer } from './components/TealContainer'
import { Title } from './components/Title'
import { BodyTextStyle } from './components/BodyTextStyle'
import img from './assets/placeholder.png'
import { Footer } from './components/Footer'

const Home = () => {
  const [data, setData] = useState({})
  let { x, y, z } = data

  useEffect(() => {
    Accelerometer.setUpdateInterval(70)
    const shake = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData)
    })

    return () => {
      shake && shake.remove()
    }
  }, [])

  return (
    <TealContainer>
      <Title>Shake to load a random villager.</Title>
      <Image source={img} />
      <BodyTextStyle>
        x: {x} y: {y} z: {z}
       
      </BodyTextStyle>
      <Footer />
    </TealContainer>
  )
}

export default Home


{/* 
 this should have the listener and accelerameter to trigger the api call

 <VillagerInfo />
  on shake, footer also disappears

*/}