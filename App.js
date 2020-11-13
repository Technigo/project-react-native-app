import React from 'react'
import styled from 'styled-components/native';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartScreen from "./components/StartScreen";
import UserPickScreen from "./components/UserPickScreen";
import ResultScreen from "./components/ResultScreen";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  flex: 1;
  font-size: 24px;
  color: palevioletred;
  justify-content: center;
  align-items: center;
`
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserPick"
          component={UserPickScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App
