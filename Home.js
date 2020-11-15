import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { Accelerometer } from 'expo-sensors'

import { Container } from './components/Container'
import { Title } from './components/Title'

const TealContainer = styled(Container)`
  width: 100%;
  padding: 18px;
  background-color: #8ccac2;
`

const Instructions = styled.Text`
  font-size: 18px;
  color: 4d4d4d;
`

const Home = () => {
  return (
    <TealContainer>
      <Title>Herro!</Title>
      
      <Instructions>
      Shake to load a random villager.
      </Instructions>
    </TealContainer>
  )
}

export default Home


{/* 
notes for this page
needs:
 placeholder image
 instructions to shake in order to get random villager
 this should have the listener and accelerameter to trigger the api call
*/}