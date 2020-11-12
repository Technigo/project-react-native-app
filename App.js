import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './components/HomePage';
import SortingHat from './components/SortingHat';
import Spells from './components/Spells';
import HouseDetails from './components/HouseDetails';
import CharacterDetail from './components/CharacterDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Sorting Hat" component={SortingHat} />
        <Stack.Screen name="Spells" component={Spells} />
        <Stack.Screen name="House Details" component={HouseDetails} />
        <Stack.Screen name="Character Details" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
