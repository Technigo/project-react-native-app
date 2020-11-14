import 'react-native-gesture-handler';
import React  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuoteList from './components/QuoteList';
import Heart from './components/Heart';
import Sun from './components/Sun';
import Flower from './components/Flower';
import Bird from './components/Bird';
import Hand from './components/Hand';
import Leaf from './components/Leaf';
import BlueFlower from './components/BlueFlower';

const  Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>      
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Positive quotes'
          component={QuoteList}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Heart'
          component={Heart}
          options={{headerShown:false}}          
        />
        <Stack.Screen
          name='Sun'
          component={Sun}
          options={{headerShown:false}}          
        />
        <Stack.Screen
          name='Flower'
          component={Flower}
          options={{headerShown:false}}          
        />
         <Stack.Screen
          name='Bird'
          component={Bird}
          options={{headerShown:false}}          
        />
        <Stack.Screen
          name='Hand'
          component={Hand}
          options={{headerShown:false}}          
        />
        <Stack.Screen
          name='Leaf'
          component={Leaf}
          options={{headerShown:false}}          
        />
        <Stack.Screen
          name='Blue Flower'
          component={BlueFlower}
          options={{headerShown:false}}          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
