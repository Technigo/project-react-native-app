import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ff6464;
`
const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  color: #fff5a5;
  padding: 100px 0;
`

const ImageBackground = styled.ImageBackground`
  display: flex;
  width: 100%;
`

export const Header = ({title}) => {
  return (
    <Container>
      <ImageBackground
        source={require('./assets/header.jpg')}
      >
        <Title>{title}</Title>
      </ImageBackground>
    </Container>
  )
}