import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Timer} from './components/Timer'
import {HomeScreen} from './components/HomeScreen'

const Stack = createStackNavigator();


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
        initialParams={{ routeTime: 30 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
