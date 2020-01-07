import React, {useState, useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components/native'
import Character from './components/Character'
import houseButtons from './components/HouseButtons'

// const Button = styled.TouchableOpacity`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 70%;
//   height: 60px;
//   top: 80;
//   padding: 10px 20px;
//   border-radius: 20px;
//   background: white;
//   color: black;
//   border: solid 3px black;
//   font-size: 40px;
//   `
  const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: 100%;
  width: 100%;
  color: red;
  `

  const Header = styled.Text`
  font-size: 30px;
  color: black;
  `

  const POTTER_API_URL = 'https://www.potterapi.com/v1'
  const POTTER_API_KEY = '$2a$10$QO0C49uSavMxC6YqmS5me.3sTZykI3k22Hn8I8zO4t3LaAdmAzFBm'
  
  const fetchCharacters = () => {
    return fetch(`${POTTER_API_URL}/characters?key=${POTTER_API_KEY}`).then(
      response => response.json(),
    )
  }
  
  const randomRangeNumber = (max) => {
    return Math.floor(Math.random() * max)
  }
  
  const getRandomCharacter = (characters) => {
    let character = characters[randomRangeNumber(characters.length) - 1]
  
    while (!character.house) {
      character = characters[randomRangeNumber(characters.length) - 1]
    }
  
    return character
  }
  
  const getRandomCharacterRecursion = (characters) => {
    let character = characters[randomRangeNumber(characters.length) - 1]
  
    // stop condition
    if (!character.house) {
      return getRandomCharacterRecursion(characters)
    }
  
    return character
  }

  // Run houseMatch to see ig guess is correct

  
  
  export default function App() {
    const [character, setCharacter] = useState()
    const [house, SetHouse] = useState("")

    
  
    const handleFetchCharacters = () => {
      fetchCharacters().then(json => {
        // recursion
        // let character = getRandomCharacterRecursion(json)
        // no recursion
        let character = getRandomCharacter(json)
        setCharacter(character)
      })
    }

    const houseMatch = (house) => {
      if (house === character.house) {
        return ("Correct!")
      } else {
        return (
          <Container>
            <Text>
            No, {character.name} is in {character.house}
            </Text>
          </Container>)
      }
    }
  
    useEffect(() => {
      handleFetchCharacters()
    }, [])
  
    if (!character) {
      return null
    }
  
    return (
      <Container>
        <Header>
          {character.name}
        </Header>
      <Button
        title="Gryffindor"
        onPress={() => {
          setHouse = "Gryffindor"
          return (
            houseMatch(house)
          )
        }}
      >
        Gryffindor
      </Button>
      <Button
        title="Slytherin"
        onPress={() => {
          setHouse = "Slytherin"
          return (
            houseMatch(house)
          )
        }}>
        Slytherin
      </Button>
      <Button
        title="Hufflepuff"
        onPress={() => {
          setHouse = "Hufflepuff"
          return (
            houseMatch(house)
          )
        }}
      >
        Hufflepuff
      </Button>
      <Button
        title="Ravenclaw"
        onPress={() => {
          setHouse = "Ravenclaw"
          return (
            houseMatch(house)
          )
        }}
      >
        Ravenclaw
      </Button>
      <Button
        title="random"
        onPress={() => {
          handleFetchCharacters()
        }}
      >
        Random
      </Button>
      {/* <HouseButtons /> */}
      </Container>
    )
  }