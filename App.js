import React, { useState } from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import BallScreen from "./components/BallScreen";
import 'react-native-gesture-handler';


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
