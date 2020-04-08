import React from 'react'
import styled from 'styled-components/native'
import { Platform, Vibration, View} from "react-native";
import { Button } from './Button'



function Separator() {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

export const Detail =  () => {
    
  return (
    <Container>
      <Title>Learn more</Title>
      <Separator />
        <Button title="Click" onPress={() => Vibration.vibrate()}>Click here</Button>
        <Separator />
    </Container>
  )
}

const Container = styled.View`
background-color: #f600a2;
justifyContent: space-between;
paddingHorizontal:50;
paddingVertical: 50;
`

const Title = styled.Text`
  flex: 1;
  font-size: 24px;
  color: palevioletred;
  color: white;
  font-weight: bold;
`

const Info = styled.Text`
flex: 1;
background-color: papayawhip;
justify-content: center;
align-items: center;
`