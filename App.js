import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { CurrentWeatherScreen } from './components/CurrentWeatherScreen';
import { HomeScreen } from './components/HomeScreen';

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
          name="LatestReport"
          component={CurrentWeatherScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App
