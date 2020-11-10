import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { QuoteList } from './components/QuoteList';
import { QuoteDetail } from './components/QuoteDetail';

const  Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Quote List"
          component={QuoteList}
        />
        <Stack.Screen
          name="Detail"
          component={QuoteDetail}          
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
