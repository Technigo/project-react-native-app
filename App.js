import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components/native'
import { Button, Share } from 'react-native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Header = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  background-color: #DC4730;
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: 900;
  font-style: italic;
  color: white;
`

const SearchContainer = styled.View`
  flex: 1;  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  background-color: #E7DFCD;  
`

const Input = styled.TextInput`
  padding: 5px;
  height: 40px;
  width: 70%;
  border-width: 1px;
  border-radius: 8px;
  border-color: #032A34; 
  background-color: #E7DFCD;
`

const JokeContainer = styled.View`
  flex: 6;
  justify-content: center;
  width: 100%;
  background-color: #E7DFCD;
`

const Joke = styled.Text`
  padding: 0 40px;
  font-size: 20px;
  color: #032A34;
`

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  background-color: #E7DFCD;
`

const App = () => {

  const [joke, setJoke] = useState("")
  const [search, setSearch] = useState()

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

  const searchJoke = () => {
    fetch(`https://icanhazdadjoke.com/search?term=${search}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        const randomIndex = Math.floor(Math.random() * Math.floor(json.results.length))
        setJoke(json.results[randomIndex].joke)
        setSearch("")
        setSearch()
      })
      .catch(() => {
        alert("No such joke")
        setSearch("")
        setSearch()
      })
  }

  const shareJoke = async () => {
    try {
      const result = await Share.share({
        message:
          `${joke}`,
      })
      result.action === Share.sharedAction ? (alert("Joke shared")) :
        result.action === Share.dismissedAction ? (alert("Joke not shared")) : null
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(getJoke, [])

  return (
    <Container>

      <Header>
        <Title>The world's best dad jokes</Title>
      </Header>

      <SearchContainer>
        <Input
          onChangeText={text => setSearch(text)}
          value={search}
        />
        <Button title="Search" onPress={searchJoke} color="#032A34"></Button>
      </SearchContainer>

      <JokeContainer>
        <Joke>{joke}</Joke>
      </JokeContainer>

      <ButtonContainer>
        <Button title="Generate" onPress={getJoke} color="#032A34"></Button>
        <Button title="Share" onPress={shareJoke} color="#032A34"></Button>
      </ButtonContainer>

    </Container >
  )
}

export default App