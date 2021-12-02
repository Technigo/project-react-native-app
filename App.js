import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { StyleSheet, Text, ImageBackground } from 'react-native'
// import styled from 'styled-components/native'

// import FetchPokemon from './components/FetchPokemon'

import { pokemonShake } from './reducers/pokemonShake'
import ShakeFetch from './components/ShakeFetch'

const reducer = combineReducers({
  pokemonShake: pokemonShake.reducer
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      {/* <Container>
        <FetchPokemon />
        
      </Container> */}
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
// const Container = styled.View`
//   flex: 1;
//   background-color: dodgerblue;
//   justify-content: center;
//   align-items: center;
// `

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `
export default App
