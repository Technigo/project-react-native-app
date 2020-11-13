import React from 'react'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomeScreen } from './components/HomeScreen'
import { Recipe } from './components/Recipe'

const App = () => {
  return (
    <>
      <HomeScreen />
      <Recipe />
    </>
  )
}

export default App
