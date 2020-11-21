import React from 'react'
import { setStatusBarHidden } from 'expo-status-bar'

import { Randomizer } from './components/Randomizer'
import { AppContainer } from './components/AppContainer'

const App = () => {
  setStatusBarHidden(true)
  return (
    <AppContainer>
      <Randomizer />
    </AppContainer>
  )
}
export default App