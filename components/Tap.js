import React, { useState, useEffect } from 'react'
import { Vibration } from "react-native";
import styled from 'styled-components/native'

export const Tap = () => {

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
padding:60px;
padding:60px;
justify-content: space-around;
`

const Title = styled.Text`
font-size: 24px;
color: white;
font-weight: bold;
justify-content: center;
align-items: center;
`

const Info = styled.Text`
flex:1;
justify-content: center;
align-items: center;
color: white;
font-weight: bold;
font-size: 45px;
`