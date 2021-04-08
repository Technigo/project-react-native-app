import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from './components/Home'
import { RandomCats } from './components/RandomCats'


const Stack = createStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RandomCats" component={RandomCats} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
