import React from 'react'
import styled from 'styled-components/native'
import {Image, StyleSheet, Text, View} from "react-native"
import logo from "./assets/logo"

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  return (
    <Container>
      <Image source={logo}/>
      <Title>      
        <Text>To share a photo from your phone with a friend, just press the button below!
        </Text>
      </Title>
    </Container>
  )
}

export default App
