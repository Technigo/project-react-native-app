import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { CurrentWeatherScreen } from './components/screens/CurrentWeatherScreen';
import { HomeScreen } from './components/screens/HomeScreen';
import { AboutScreen } from './components/screens/AboutScreen';

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
        <Stack.Screen 
          name="About"
          component={AboutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App
