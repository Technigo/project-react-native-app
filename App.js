import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import MovieList from './components/MovieList'
import Header from './components/Header'

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 50px 0 25px 0;
`

const App = () => {

  return (
    <Container>
      <Header />
      <ScrollView>
      <MovieList />
      </ScrollView>
    </Container>
  )
  
}

export default App
