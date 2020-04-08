import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Results } from './Components/Results'
import { Search } from './Components/Search'
import styled from 'styled-components/native'
import { StyleSheet, TextInput, Button, View } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 18px;
  color: #f194ff; 
`



const Stack = createStackNavigator ()

const App = () => {
  return ( 
   
  <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Nail Salons' component={Search} />
      <Stack.Screen name='Results' component={Results} />
      </Stack.Navigator>
  </NavigationContainer>
 
  )
}

export default App