import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text, TouchableOpacity, View } from 'react-native'

import { Welcome } from './pages/Welcome'
import { CatFactsPage } from './pages/CatFactsPage'
import { DogFactsPage } from './pages/DogFactsPage'

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
`

const ButtonContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-evenly;
`

const ButtonTouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 10px;
  background-color: pink;
`

const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: 500;
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
          <ButtonContainer>
            <ButtonTouchableOpacity
              onPress={onCatsButtonPress}
            >
              <ButtonText>CATS</ButtonText>
            </ButtonTouchableOpacity>
            <ButtonTouchableOpacity
              onPress={onDogsButtonPress}
            >
              <ButtonText>DOGS</ButtonText>
            </ButtonTouchableOpacity>
          </ButtonContainer>
        </View>
      ) : (
        (dogPage === true ? <DogFactsPage onRestartMainPage={() => setInitialScreen(true)}/> : <CatFactsPage onRestartMainPage={() => setInitialScreen(true)}/>)
      )
    }
    </Container>
  )
}

export default App
