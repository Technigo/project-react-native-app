import React from 'react'

import { Randomizer } from './components/Randomizer'
import { Footer } from './components/Footer'
import { AppContainer } from './components/AppContainer'

const App = () => {
  return (
    <AppContainer>
      <Randomizer />
      <Footer />
    </AppContainer>
  )
}

export default App