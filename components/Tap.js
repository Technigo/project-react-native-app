import React, { useState } from 'react'
import { Platform, Vibration, View, TouchableOpacity, } from "react-native";
import styled from 'styled-components/native'

export const Tap = () => {
  //const [count, setCount] = useState(0)


  return (
    <Container>
      <Title>Nothing to do?</Title>
      <Info>Tap the alien</Info>
      <Info title="tap tap" onPress={() => Vibration.vibrate()}>👽</Info>
    </Container>
  )
}

const Container = styled.View`
flex:1;
background-color: #f600a2;
justifyContent: space-between;
padding:60px;
padding:60px;
`

const Title = styled.Text`
font-size: 24px;
color: palevioletred;
color: white;
font-weight: bold;
justify-content: center;
align-items: center;
`

const Info = styled.Text`
flex:1;
justify-content: center;
align-items: center;
color: darkblue;
font-weight: bold;
font-size: 45px;
`