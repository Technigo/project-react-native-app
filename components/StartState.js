import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'

import placeholder from '../assets/placeholder.png'
import { Container, Nook } from './ProfileStyles'
import { Footer } from './Footer'

const Instructions = styled.Text`
  width: 98%;
  padding: 16px 0 0 0;
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 700;
  color: palevioletred;
  text-align: center;
`

export const StartState = () => {
  return (
    <Container>
      <Image 
        source={placeholder}
        style={{
          width: 190,
          height: 190,
          marginTop: 100,
          marginBottom: 10,
      }}/>
      <Instructions>
        Shake to load a random villager
      </Instructions>
      <Footer />
    </Container>
  )
}