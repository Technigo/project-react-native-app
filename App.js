import React from 'react'


//import { Platform, Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyLocation from './Components/MyLocation'
//import { View } from 'react-native';
import styled from 'styled-components/native'
import HomePage from './Components/HomePage';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name='Home page' component={HomePage}/>
          <Stack.Screen name='Your location' component={MyLocation}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App