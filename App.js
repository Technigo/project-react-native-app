import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from './components/HomeScreen'
import InfoScreen from './components/InfoScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Back" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
