import React from "react"
import { View, Text, ImageBackground } from "react-native"
import styled from "styled-components/native"

//Styled components 🎨
const TopTitle = styled.Text`
  font-size: 60px;
  color: #000;
  margin-top: 20%;
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
