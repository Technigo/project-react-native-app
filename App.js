import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import styled from 'styled-components/native'

import HomePage from './Components/HomePage';
import MovieList from './Components/MovieList'
import MovieDetail from './Components/MovieDetail'
import Lottie from './Components/Lottie'

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomePage}/>
          <Stack.Screen name='Lottie' component={Lottie}/>
          <Stack.Screen name='Now playing' component={MovieList} />
          <Stack.Screen name='Movie detail' component={MovieDetail}/>
          
        </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}
export default App

