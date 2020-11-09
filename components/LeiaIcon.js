import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'


const Container = styled.View`
flex: 1
width: 100%
justify-content: center;
align-items: center;
`

const Img = styled.Image`
  top: 0;
  width: 500px;
  height: 300px;
  margin-bottom: 20px;
`

export const LeiaIcon = () => {
  return (
    <Container>
      <Image
        source={require('./assets/Leia.png')}
      />
    </Container>
  )
}
