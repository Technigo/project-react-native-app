import React from "react";
import HomeScreen from "./components/HomeScreen";
import QuoteScreen from "./components/QuoteScreen";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quote" component={QuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;