import React from 'react'
import styled from 'styled-components/native'
import ShakeForQoute from './components/ShakeForQoute'
import Homepage from './components/Homepage'
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
      <Drawer.Navigator initialRouteName="Homepage">
        <Drawer.Screen name="Home" component={Homepage} />
        <Drawer.Screen name="Shake For Qoute" component={ShakeForQoute} />
        {/* <Drawer.Screen name="Fortune" component={Fortune} /> */}
        <Drawer.Screen name="Get your location!" component={LocationStatus} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
