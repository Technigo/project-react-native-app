import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AllCoins } from "./AllCoins";
import { HomeScreen } from "./HomeScreen";
import { ShakeRandomCoin } from "./ShakeRandomCoin";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: "black", }, headerTintColor: '#fff',}}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "CryptoFun" }}/>
        <Stack.Screen 
          name="AllCoins" 
          component={AllCoins}
          options={{ title: "All Coins" }}/>
        <Stack.Screen 
          name="ShakeRandomCoin" 
          component={ShakeRandomCoin}
          options={{ title: "Random Coin Info" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};