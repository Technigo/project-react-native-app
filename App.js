import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LatestNews } from './components/LatestNews'
import { Home } from './components/Home'

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LatestNews" component={LatestNews} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}

export default App


