import React from 'react';
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MagicBallScreen } from './components/MagicBallScreen';
import { HomeScreen } from './components/HomeScreen'

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home' 
          component={HomeScreen}         
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
          }} />
        <Stack.Screen
          name='Magic Ball' 
          component={MagicBallScreen}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

