import React from "react"
import styled from "styled-components/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { ButtonApi } from "./components/ButtonApi"
// import { ImageBackground } from "react-native"
// import { Footer } from "./components/Footer"

const Container = styled.View`
  flex: 1;
  background-color: #ff6262;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const Drawer = createDrawerNavigator()
  return (
    <>
      <Container>
        {/* <Background source={require("./assets/frame.png")}> */}
        <ButtonApi />
        {/* </Background> */}
      </Container>
    </>
  )
}

// const Background = styled.ImageBackground`
//   display: contents;
//   height: 600px;
//   width: 100%;
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: purple;
// `

export default App
