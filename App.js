import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { DogsList } from './components/DogsList'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { DogDetails } from './components/DogDetails'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.Text`
  margin-top: 40px;
  font-size: 48px;
  color: palevioletred;
`
const Stack = createStackNavigator();

const App = () => {

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Doggos" component={DogsList} />
        <Stack.Screen name='Doggo Details' component={DogDetails} />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App
