import React, { useState } from 'react'
import { Platform, Vibration, View} from "react-native";
import styled from 'styled-components/native'

export const Tap = () => {
    const [count, setCount] = useState(0)

    return (
     <Container>
        <Title>Nothing to do?</Title>
            <Info>Tap the alien</Info>
        <Info title="tap tap" onPress={() => setCount(count + 1) && Vibration.vibrate()}>👽{count}</Info>
     </Container>
    )
}

const Container = styled.View`
flex: 3;
background-color: #f600a2;
justifyContent: space-between;
padding:50px;
padding:50px;
`

const Title = styled.Text`
  flex: 1;
  font-size: 24px;
  color: palevioletred;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`

const Info = styled.Text`
flex: 2;
background-color: papayawhip;
justify-content: center;
align-items: center;
color: darkblue;
font-size: 45px;
`