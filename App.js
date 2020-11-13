import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Timer} from './components/Timer'
import {HomeScreen} from './components/HomeScreen'

const Stack = createStackNavigator();

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen} 
        />
        <Stack.Screen
        name="Timer"
        component={Timer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
