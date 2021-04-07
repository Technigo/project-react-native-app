import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import styled from 'styled-components/native';
import { Card } from './components/Card';
import HomeScreen from './components/HomeScreen';
import { RandomCoin } from './components/RandomCoin';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Stack = createStackNavigator();

const App = () => {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "CoinMe" }}
          />
          <Stack.Screen 
            name="Card" 
            component={Card}
            options={{ title: "All the coins" }}
          />
          <Stack.Screen 
          name="RandomCoin" 
          component={RandomCoin}
          options={{ title: "Shake to get random coin" }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>

  );
};

export default App;
