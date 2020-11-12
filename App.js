import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import MovieDetail from './components/MovieDetail';
import SortingHat from './components/SortingHat';
import Spells from './components/Spells';
import HouseDetails from './components/HouseDetails';
import CharacterDetail from './components/CharacterDetail';
import Lottie from './components/Lottie';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sorting Hat" component={SortingHat} />
        <Stack.Screen name="Movie Detail" component={MovieDetail} />
        <Stack.Screen name="Lottie" component={Lottie} />
        <Stack.Screen name="Spells" component={Spells} />
        <Stack.Screen name="House Details" component={HouseDetails} />
        <Stack.Screen name="Character Details" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
