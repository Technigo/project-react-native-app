import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StartPage from './components/StartPage'
import Quote from './components/Quote'
import Joke from './components/Joke'

const Drawer = createDrawerNavigator();


const App = () => {
  
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Start" component={StartPage}
        options={{
          headerTitleStyle: {
            color: '#3d3d3d',
          },
          headerStyle: {
            backgroundColor: '#E6BA95',
          },
        }} />
        <Drawer.Screen name="Quote" component={Quote}
        options={{
          headerTitleStyle: {
            color: '#3d3d3d',
          },
          headerStyle: {
            backgroundColor: '#E6BA95',
          },
        }} 
        />
        <Drawer.Screen name="Joke" component={Joke}
        options={{
          headerTitleStyle: {
            color: '#3d3d3d',
          },
          headerStyle: {
            backgroundColor: '#E6BA95',
          },
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )

}

export default App;

