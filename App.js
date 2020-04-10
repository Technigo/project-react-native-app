import React from 'react'
// NAVIGATION:
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'
import { Houses } from './components/Houses'

import { Image } from 'react-native';
import logo from './assets/got.png'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  border: 5px solid palevioletred;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`


const App = () => {
  return (
    <Container>
      <Image source={logo} /> 
      <Houses />  
    </Container>
  )
}

export default App


// NAVIGATION: errors, errors
/*
const Stack = createStackNavigator();

const App = () => {
  return (
    // NAVIGATION:
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='House' component={Houses} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App


*/

