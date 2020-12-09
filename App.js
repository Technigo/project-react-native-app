import React, { useState } from "react";
import styled from "styled-components/native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import BallScreen from "./components/BallScreen";



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Back" }}
        />
        <Stack.Screen name="Ball" component={BallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
