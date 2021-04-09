import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import RecipePage from './screens/RecipePage';
import WelcomePage from './screens/WelcomePage';
import ProfilePage from './screens/ProfilePage';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage}/>
        <Stack.Screen name="Recipe Search" component={Home} />
        <Stack.Screen name="Recipe" component={RecipePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const Container = styled.ScrollView`
  background-color: white;
  padding: 1px;
  padding-top: 30;
`

const Title = styled.Text`
  font-size: 24px;
  color: black;
  margin: 20px 0 0 5px;
`
