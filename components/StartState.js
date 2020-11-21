import React from 'react'
import { Image } from 'react-native'

import placeholder from '../assets/placeholder.png'
import { Name, Container } from './ProfileSyles'
import { Footer } from './Footer'

export const StartState = () => {
  return (
    <Container>
      <Name>
        Shake to load a random villager
      </Name>
      <Image 
        source={placeholder}
        style={{
          width: 120,
          height: 120,
          marginBottom: 10
      }}/>
      <Footer />
    </Container>
  )
}