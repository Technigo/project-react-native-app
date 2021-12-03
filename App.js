import React, { useState } from 'react'
import styled from 'styled-components/native'
import { ImageBackground, Button } from 'react-native'

import { SensorComponent } from './components/SensorComponent'
import { SpaceFact } from './components/SpaceFact'


const App = () => {
  const [currentTab, setCurrentTab] = useState('Button')

  return (
    <Container>
      <ScreenBackground source={require('./assets/rocket-background.png')}>
      <Button title="Take Off" onPress={() => setCurrentTab('SpaceFact')} />
      <Button title="Space Shake" onPress={() => setCurrentTab('SensorComponent')} />
      {currentTab === 'SpaceFact' && <SpaceFact />}
      {currentTab === 'SensorComponent' && <SensorComponent />}
      </ScreenBackground>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const ScreenBackground = styled.ImageBackground`
  height: 100%;
  width: 100%;
`

export default App
