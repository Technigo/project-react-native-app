import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Joke from "./components/Joke";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Joke" component={Joke} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
