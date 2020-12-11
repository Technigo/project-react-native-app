import 'react-native-gesture-handler'
import React  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { StartScreen } from './Components/StartScreen'
import { HomeScreen } from './Components/HomeScreen'

const Tab = createMaterialTopTabNavigator()

const App = () => {
  
return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Challenges" component={StartScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App


