import React from "react"
import { View, Text, ImageBackground } from "react-native"
import styled from "styled-components/native"

// const Container = styled.View`
//   background-color: whitesmoke;
//   justify-content: center;
//   align-items: center;
// `

const TopTitle = styled.Text`
  font-size: 36px;
  color: #000;
  margin-top: 30%;
`

const SubTitle = styled.Text`
  font-size: 24px;
  color: #000;
  text-align: center;
`

const BackgroundImage = styled.ImageBackground`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`

export const StartScreen = () => {
  return (
    <BackgroundImage source={require("../assets/dog-bgr.jpg")}>
      <TopTitle>Bored?</TopTitle>
      <SubTitle>Head to the menu!</SubTitle>
    </BackgroundImage>
  )
}
