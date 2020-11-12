import React, { useState} from 'react'
import styled from 'styled-components/native'
import {  View } from "react-native"
import HomeScreen from './components/HomeScreen'
import InfoScreen from './components/InfoScreen'

import { NavigationContainer, navigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

const App = () => {

  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" 
                  component={HomeScreen} 
                  options={{title: 'Welcome'}}/>
    <Stack.Screen name="Info" component={InfoScreen}/>
  </Stack.Navigator>
</NavigationContainer>
  )
}

export default App;