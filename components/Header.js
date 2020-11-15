import React from 'react'
import styled from 'styled-components/native'

import HeaderImage from './assets/header.jpg'

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ff6464;
`
const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  color: #fff5a5;
  padding: 100px 10px;
`

const ImageBackground = styled.ImageBackground`
  display: flex;
  width: 100%;
`

export const Header = ({title}) => {
  return (
    <Container>
      <ImageBackground
        source={HeaderImage}
      >
        <Title>{title}</Title>
      </ImageBackground>
    </Container>
  )
}