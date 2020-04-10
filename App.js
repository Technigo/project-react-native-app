import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { Restaurants } from './Pages/Restaurants'
import { Restaurant } from './Pages/Restaurant'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Container = styled.View`
  flex: 1;
  background-color: white;
`

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Container>
    <Stack.Navigator>
      <Stack.Screen name="Trending this Week" component={Restaurants} />
      <Stack.Screen name="Best place this week" component={Restaurant} />
    </Stack.Navigator>
    </Container>
  </NavigationContainer>
  )
}

export default App
