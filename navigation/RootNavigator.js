import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import ShakeFetch from '../components/ShakeFetch'
import { ListOfFavorites } from '../components/ListOfFavorites'

// import { AppRegistry } from 'react-native'
// import App from '../App'

// AppRegistry.registerComponent('main', () => App)

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

// return (
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="PokéShake">
//         <Drawer.Screen name="PokéShake" component={ShakeFetch} />
//         <Drawer.Screen name="My team" component={ListOfFavorites} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//     <Background />
//     </PersistGate>
//   </Provider>
