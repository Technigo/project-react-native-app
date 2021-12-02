import React from 'react'
import styled from 'styled-components/native'
import API from './components/API'
import Header from './components/Header'

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
  //   return (
  //     <Container>
  //       <Header />
  //       <API />
  //       <Title>Shake to see the weather somewhere</Title>
  //     </Container>
  //   )
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Header">
        <Drawer.Screen name="Header" component={Header} />
        <Drawer.Screen name="API" component={API} />
        <Drawer.Screen name="Location" component={Location} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
