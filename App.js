import React from 'react'
import styled from 'styled-components/native'
import { Touchable } from './components/Touchable'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 25px;
  color: palevioletred;
`

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Touchable} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App

  
