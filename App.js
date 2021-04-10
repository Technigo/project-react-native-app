import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'

import { Welcome } from './pages/Welcome'
import { CatFactsPage } from './pages/CatFactsPage'
import { DogFactsPage } from './pages/DogFactsPage'

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Welcome}
          options={{ 
            title: 'Home',
            headerStyle: {
              backgroundColor: 'whitesmoke',
            },
            headerTintColor: 'whitesmoke'
          }}
        />
        <Stack.Screen 
          name="Cats" 
          component={CatFactsPage}
          options={{ 
            title: 'Random Cat Facts',
            headerStyle: {
            backgroundColor: 'whitesmoke',
          },
            headerTintColor: 'black' 
          }}
        />
        <Stack.Screen 
          name="Dogs" 
          component={DogFactsPage}
          options={{ 
            title: 'Random Dog Facts',
            headerStyle: {
              backgroundColor: 'whitesmoke',
            },
              headerTintColor: 'black' 
            }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
