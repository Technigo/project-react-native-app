import React from 'react'
import styled from 'styled-components/native'
import { Button, Platform, Vibration, View} from "react-native";



export const Detail = () => {

  return (
    <Container>

      <Info title="Click" onPress={
        () => Vibration.vibrate()}>Click here</Info>

    </Container>
  )
}

const Container = styled.View`
flex:1;
background-color: #f600a2;
justifyContent: space-between;
paddingHorizontal:50;
paddingVertical: 50;
`

const Title = styled.Text`
font-size: 24px;
color: palevioletred;
color: white;
font-weight: bold;
`

const Info = styled.Text`
background-color: papayawhip;
justify-content: center;
align-items: center;
`