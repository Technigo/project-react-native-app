import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import ShakeFetch from '../pages/ShakeFetch'
import { ListOfFavorites } from '../pages/ListOfFavorites'

const Drawer = createDrawerNavigator()

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="PokéShake">
        <Drawer.Screen name="PokéShake" component={ShakeFetch} />
        <Drawer.Screen name="My team" component={ListOfFavorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator
