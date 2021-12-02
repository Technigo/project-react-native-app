import React from "react"
import { Button, Text, View, ImageBackground, Image } from "react-native"
import styled from "styled-components/native"

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin-bottom: 20px;
  text-align: center;
`

const StickerImage = styled.Image`
  height: 312px;
  width: 312px;
`

export const StartScreen = () => {
  return (
    <Container>
      <Title>Don't know what to do?</Title>
      <Title>head to the menu!</Title>
      <StickerImage source={require("../assets/entertainment.png")} />
    </Container>
  )
}
