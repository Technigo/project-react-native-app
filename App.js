import 'react-native-gesture-handler'
import React from 'react'
import styled from 'styled-components/native'
import Tictactoe from './compontents/Tictactoe'
import Welcome from './compontents/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Container = styled.View`
  background-color: papayawhip;
  flex: 1;
`

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Container>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Welcome} />
          <Stack.Screen name="Tictactoe" component={Tictactoe} />
        </Stack.Navigator>
      </Container>
    </NavigationContainer>
  )
};

export default App