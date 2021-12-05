import React, { useState } from "react"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import { useFonts } from "expo-font"
import { Image, ImageBackground } from "react-native"

import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { ButtonApi } from "./components/ButtonApi"
import { ShakeApi } from "./components/ShakeApi"

const Drawer = createDrawerNavigator()

const App = () => {
  const [onHome, setOnHome] = useState(true)

  return (
    <>
      {onHome ? (
        <Container>
          <Background source={require("./assets/bgfriends.jpeg")} />
          <StartButton onPress={() => setOnHome(false)}>
            <EnterText>START</EnterText>
          </StartButton>
        </Container>
      ) : (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Shaker">
            <Drawer.Screen name="Shaker" component={ShakeApi} />
            <Drawer.Screen name="Clicker" component={ButtonApi} />
          </Drawer.Navigator>
        </NavigationContainer>
      )}
    </>
  )
}

export default App

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const StartButton = styled.TouchableOpacity`
  width: 150px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffdf00;
`
const EnterText = styled.Text`
  text-align: center;
  font-weight: 500;
`
const Background = styled.ImageBackground`
  display: flex;
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  position: absolute;
  z-index: -1;
`
