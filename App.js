import React from 'react'
// NAVIGATION:
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'
import { Houses } from './components/Houses'
import { Detail } from './components/Detail'

// // import { Image } from 'react-native';
import logo from './assets/got.png'

const Container = styled.View`
  flex: 1;
  background-color: honeydew;
  justify-content: center;
  align-items: center;
  border: 0px solid palevioletred;
`
/* const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
 */
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='House' component={Houses} />
      <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


// NAVIGATION: errors, errors
/*

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

