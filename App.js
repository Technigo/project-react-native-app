import 'react-native-gesture-handler';
import React from 'react'
import styled from 'styled-components/native'
import { Jumping } from './components/Jumping'
import Dressage from './components/Dressage'

import { HomeScreen } from './components/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome'}}
        />

        <Stack.Screen name="Jumping" component={Jumping} />
        <Stack.Screen name="Dressage" component={Dressage} />
        
       </Stack.Navigator>         

    </NavigationContainer>

  );
};

export default App
