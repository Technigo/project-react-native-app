import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text, Button, View } from 'react-native'

import { Welcome } from './pages/Welcome'
import { CatFactsPage } from './pages/CatFactsPage'
import { DogFactsPage } from './pages/DogFactsPage'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`

const ButtonContainer = styled.View`
  flex-direction: column;
  padding: 20px;
`

const App = () => {
  const [initialScreen, setInitialScreen] = useState(true) 
  const [dogPage, setDogPage] = useState(false)
  const [catPage, setCatPage] = useState(false)

  const onDogsButtonPress = () => {
    setInitialScreen(false)
    setDogPage(true)
  };

  const onCatsButtonPress = () => {
    setInitialScreen(false)
    setCatPage(true)
  };

  return (
    <Container>
      {initialScreen ? (
        <View>
        <Welcome></Welcome>
      <Button
        onPress={onCatsButtonPress}
        title="Cats"
      />
      <Button
        onPress={onDogsButtonPress}
        title="Dogs"
      />
      </View>
      ) : (
        (dogPage ? <DogFactsPage /> : <CatFactsPage />)
     
        // <CatFactsPage></CatFactsPage>
      )
    }
      
    </Container>
  )
}

export default App
