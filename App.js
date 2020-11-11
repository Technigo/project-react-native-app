import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './components/HomePage';
import SortingHat from './components/SortingHat';
import HouseDetails from './components/HouseDetails';
import CharacterDetail from './components/CharacterDetail';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Sorting Hat" component={SortingHat} />
        <Stack.Screen name="House Details" component={HouseDetails} />
        <Stack.Screen name="Character Details" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Container>
    //   <Title>This is your not so cool app!</Title>
    //   <Title>Go to App.js and start coding</Title>
    //   <Title>💅💅💅</Title>
    // </Container>
  );
};

export default App;
