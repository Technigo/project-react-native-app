import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { StartScreen } from "./components/StartScreen"
import { Bored } from "./components/Bored"
import { ShakeMovieApi } from "./components/ShakeMovieApi"

// const Container = styled.View`
//   flex: 1;
//   background-color: papayawhip;
//   justify-content: center;
//   align-items: center;
// `

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
//   margin-bottom: 20px;
//   text-align: center;
// `
const Drawer = createDrawerNavigator()

const App = () => {
  return (
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
