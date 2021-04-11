import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Home } from './screens/Home'
import { Profile } from './screens/Profile'
import { Logout } from './screens/Logout'
import Header from './components/Header'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
