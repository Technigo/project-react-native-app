import React from 'react'

import { ShakeRandomizer } from './components/ShakeRandomizer'
import { Footer } from './components/Footer'
import { AppContainer } from './components/AppContainer'

const App = () => {
  return (
    <AppContainer>
      <ShakeRandomizer />
      <Footer />
    </AppContainer>
  )
}

export default App