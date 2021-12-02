import React from 'react'
import styled from 'styled-components/native'
import API from './components/API'
import Header from './components/Header'
import LocationStatus from './components/LocationStatus'
// import Fortune from './components/Fortune'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const Container = styled.View`
  flex: 1;
  background-color: red;
  justify-content: center;
  align-items: center;
  padding: 7%;
  justify-content: space-evenly;
  border: 5px solid black;
`

const Title = styled.Text`
  font-size: 50px;
  color: white;
  text-align: center;
`

const App = () => {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Header">
        <Drawer.Screen name="Header" component={Header} />
        <Drawer.Screen name="API" component={API} />
        {/* <Drawer.Screen name="Fortune" component={Fortune} /> */}
        <Drawer.Screen name="Location" component={LocationStatus} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
