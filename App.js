import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import { StyleSheet, ImageBackground } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { pokemonShake } from './reducers/pokemonShake'
import ShakeFetch from './components/ShakeFetch'
import { ListOfFavorites } from './components/ListOfFavorites'
import { Background } from './components/Background'

const reducer = combineReducers({
  pokemonShake: pokemonShake.reducer
})

const store = configureStore({ reducer })

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   stateReconciler: autoMergeLevel2
// }
// const persistedReducer = persistReducer(persistConfig, pokemonShake)

// const store = createStore(persistedReducer)
// const persistor = persistStore(store)

// LocalStorage with createStore (using for development in the browser):

// const persistedStateJSON = localStorage.getItem('pokemonReduxState')
// let persistedState

// if (persistedStateJSON) {
//   persistedState = JSON.parse(persistedStateJSON)
// }

// const store = createStore(
//   reducer,
//   persistedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// store.subscribe(() => {
//   localStorage.setItem('pokemonReduxState', JSON.stringify(store.getState()))
// })

// const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ImageBackground
        source={require('./assets/sunburst.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <ShakeFetch />
        {/* <ListOfFavorites /> */}
      </ImageBackground>
      {/* </PersistGate> */}
    </Provider>

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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
