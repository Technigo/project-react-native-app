import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import ListScreen from "./components/ListScreen";
import Rembrandt from "./components/Rembrandt";
import Vermeer from "./components/Vermeer";
import ArtDetails from "./components/ArtDetails";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Explore" }}
        />
          <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: "Select a painting" }}
        />
        <Stack.Screen
          name="Rembrandt"
          component={Rembrandt}
          options={{ title: "Rembrandt - Select a painting" }}
        />
        <Stack.Screen
        name="Vermeer"
        component={Vermeer}
        options={{ title: "Vermeer - Select a painting" }}
      />
        <Stack.Screen
          name="Details"
          component={ArtDetails}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
