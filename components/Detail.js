import React from 'react'
import styled from 'styled-components/native'
import { Button, Platform, Vibration, View} from "react-native";

function Separator() {
  return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

const Container = styled.View`
flex: 3;
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

export const Detail =  () => {

  return (
    <Container>
      <Title>Learn more</Title>
      <Separator />
        <Button title="Click" onPress={() => Vibration.vibrate()} />
        <Separator />
      {/* <Title>{images.title}</Title>
      <Title>{images.explanation}</Title> */}
    </Container>
  )
}