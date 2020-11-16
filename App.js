import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import { HomeScreen } from "./components/HomeScreen";
import { ShowBook } from "./components/ShowBook";
import { ReadMore } from "./components/ReadMore";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ShowBook"
          component={ShowBook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReadMore"
          component={ReadMore}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
