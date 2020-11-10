import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components/native'
import { Button } from 'react-native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Header = styled.View`
  flex: 1;
  width: 100%;
  background-color: #DC4730;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`

const Title = styled.Text`
  color: white;
  font-size: 20px;
`

const Main = styled.View`
  flex: 7;
  width: 100%;
  background-color: #E7DFCD;
  justify-content: center;
  align-items: center;
`

const Joke = styled.Text`
  font-size: 20px;
  color: black;
  padding: 20px;
`

const Footer = styled.View`
  flex: 1;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const App = () => {

  const [joke, setJoke] = useState("")

  const getJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => setJoke(json.joke))
  }

  useEffect(getJoke, [])

  return (
    <Container>

      <Header>
        <Title>The world's best dad jokes</Title>
      </Header>

      <Main>
        <Joke>{joke}</Joke>
      </Main>

      <Footer>
        <Button title="Generate new joke" onPress={getJoke} color="#032A34"></Button>
      </Footer>

    </Container >
  )
}

export default App