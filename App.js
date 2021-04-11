import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

import { HomeStackScreen, LogOutStackScreen, ProfileStackScreen } from './screens/StackNavigators'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator style={styles.drawerContainer}>
        <Drawer.Screen style={styles.drawerOptions} name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
        <Drawer.Screen name="LogOut" component={LogOutStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create ({
  drawerContainer: {
    backgroundColor: "red"
  },
  drawerOptions: {
    backgroundColor: "red"
  }
})

export default App

/*

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component="Home"
          options={{ title: "Home"}}
        />
        <Stack.Screen 
          name="Notifications"
          component="Notifications"
          options={{ title: "Notifications"}}
      </Stack.Navigator>
    </NavigationContainer
      />
  )
}
*/
