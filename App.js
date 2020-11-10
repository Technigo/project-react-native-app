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
  font-size: 24px;
  font-weight: 900;
  font-style: italic;
`

const Main = styled.View`
  flex: 5;
  width: 100%;
  background-color: #E7DFCD;
  justify-content: center;
  align-items: center;
`

const Joke = styled.Text`
  font-size: 20px;
  color: #032A34;
  padding: 40px;
`

const Footer = styled.View`
  flex: 3;
  width: 100%;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
`

const App = () => {

  const [joke, setJoke] = useState("")
  const [jokes, setJokes] = useState([])

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

  const getDadJoke = () => {
    fetch('https://icanhazdadjoke.com/search?term=dad', {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        const randomIndex = Math.floor(Math.random() * Math.floor(json.results.length))
        setJoke(json.results[randomIndex].joke)
      })
  }

  const getHipsterJokes = () => {
    fetch('https://icanhazdadjoke.com/search?term=hipster', {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        setJoke(null)
        setJokes(json.results)
      })
  }

  useEffect(getJoke, [])

  return (
    <Container>

      <Header>
        <Title>The world's best dad jokes</Title>
      </Header>

      <Main>
        {joke ?
          <Joke>{joke}</Joke> :
          jokes ?
            jokes.map(item => {
              <Joke>{item.joke}</Joke>
              console.log(item.joke)
            }) : null
        }
      </Main>

      <Footer>
        <Button title="Generate new joke" onPress={getJoke} color="#032A34"></Button>
        <Button title="Jokes including 'dad'" onPress={getDadJoke} color="#032A34"></Button>
        <Button title="All hipster jokes" onPress={getHipsterJokes} color="#032A34"></Button>
      </Footer>

    </Container >
  )
}

export default App