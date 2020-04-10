import React from 'react'
// NAVIGATION:
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'
import { Houses } from './components/Houses'



const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  return (
    <Container>
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

