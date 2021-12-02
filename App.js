import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { StyleSheet, ImageBackground } from 'react-native'

import { pokemonShake } from './reducers/pokemonShake'
import ShakeFetch from './components/ShakeFetch'

const reducer = combineReducers({
  pokemonShake: pokemonShake.reducer
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      <ImageBackground
        source={require('./assets/sunburst.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <ShakeFetch />
      </ImageBackground>
    </Provider>
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
