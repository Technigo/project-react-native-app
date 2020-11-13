import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import { HomeScreen } from './components/HomeScreen'
import { Recipe } from './components/Recipe'
import { RecipeDetails } from './components/RecipeDetails'

const Stack = createStackNavigator()

/*<HomeScreen />
      <Recipe /> */

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Recipes' component={Recipe}/>
        <Stack.Screen name='Recipe-details' component={RecipeDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
