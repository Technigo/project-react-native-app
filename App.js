import 'react-native-gesture-handler';

import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ButtonSection from './components/ButtonSection'
import MealList from './components/MealList'
import RecipePage from './components/RecipePage'

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <ButtonSection />
        <Stack.Screen
          name="Meals"
          component={MealList}
        />
        <Stack.Screen 
        name="Recipe" 
        component={RecipePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App