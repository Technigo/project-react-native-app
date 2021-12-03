import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { StartScreen } from "./components/StartScreen"
import { Bored } from "./components/Bored"
import { ShakeMovieApi } from "./components/ShakeMovieApi"

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StartScreen} />
        <Drawer.Screen name="Movie Generator" component={ShakeMovieApi} />
        <Drawer.Screen name="Activity Generator" component={Bored} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
