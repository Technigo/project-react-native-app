import React from "react"
import styled from "styled-components/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

// import { ButtonApi } from "./components/ButtonApi"
import { StartScreen } from "./components/StartScreen"
import { Bored } from "./components/Bored"
import { ShakeMovieApi } from "./components/ShakeMovieApi"

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin-bottom: 20px;
  text-align: center;
`
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    // <Container>
    //   <Title>shake to get a movie suggestion</Title>
    //   <ShakeMovieApi />
    // </Container>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Generator">
        <Drawer.Screen name="Home" component={StartScreen} />
        <Drawer.Screen name="Movie Generator" component={ShakeMovieApi} />
        <Drawer.Screen name="Activity Generator" component={Bored} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
