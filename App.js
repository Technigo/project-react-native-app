import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native'

import { StartScreen } from './Components/StartScreen'
import { HomeScreen } from './components/HomeScreen';

//import challenges from'./Components/Data/challenges.json'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Tab = createMaterialTopTabNavigator();

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
