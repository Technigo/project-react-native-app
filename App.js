import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from '@use-expo/font'
import styled from 'styled-components/native';

import { Card } from './components/Card';
import { HomeScreen } from './components/HomeScreen';
import { RandomCoin } from './components/RandomCoin';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const Stack = createStackNavigator();

const App = () => {
  useFonts({
    'Recursive': require('./assets/fonts/Recursive-VariableFont_CASL,CRSV,MONO,slnt,wght.ttf'),
  })

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
            options={{ title: "Coins" }}
          />
          <Stack.Screen 
          name="RandomCoin" 
          component={RandomCoin}
          options={{ title: "Get random coin info" }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default App;
