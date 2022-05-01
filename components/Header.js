import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  padding: 30px;
`

const MainText = styled.Text`
  font-size: 20px;
  padding: 10px;
  font-weight: 700;
  text-align: center;
  color: black;
  background-color: #87e5f5;
  border-radius: 8px;
`

const Header = () => {
  return (
    <Container>
      <MainText>Shake the phone for a quote</MainText>
    </Container>
  )
}
export default Header
