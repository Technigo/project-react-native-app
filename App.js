import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StartPage from './components/StartPage'
import Answer from './components/Answer'
import Joke from './components/Joke'

const Drawer = createDrawerNavigator();

const App = () => {
  
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Start" component={StartPage}
        options={{
          headerTitleStyle: {
            color: 'thistle',
          },
          headerStyle: {
            backgroundColor: '#833471',
          },
        }} />
        <Drawer.Screen name="Answer" component={Answer}
        options={{
          headerTitleStyle: {
            color: 'thistle',
          },
          headerStyle: {
            backgroundColor: '#833471',
          },
        }} 
        />
        <Drawer.Screen name="Joke" component={Joke}
        options={{
          headerTitleStyle: {
            color: 'thistle',
          },
          headerStyle: {
            backgroundColor: '#833471',
          },
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )

}

export default App;

