import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from 'styled-components/native';

import { AllCoins } from './components/AllCoins';
import { HomeScreen } from './components/HomeScreen';
import { ShakeRandomCoin } from './components/ShakeRandomCoin';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Stack = createStackNavigator();

const App = () => {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerStyle: { backgroundColor: "black" }, headerTintColor: "white" }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "CryptoFun" }}
          />
          <Stack.Screen 
            name="AllCoins" 
            component={AllCoins}
            options={{ title: "Coins" }}
          />
          <Stack.Screen 
          name="ShakeRandomCoin" 
          component={ShakeRandomCoin}
          options={{ title: "Random coin info" }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default App;
