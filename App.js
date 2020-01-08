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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding-top: 30px;
  width: 100%;
  color: red;
  `

  const Header = styled.Text`
  font-size: 30px;
  color: black;
  `

  const AnswerBlock = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  width: 60%;
  color: red;
  `
  const Writing = styled.Text`
  font-size: 20px;
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

  // Run houseMatch to see if guess is correct
  const houseMatch = (house, character) => {
    console.log(character);
    if (house === character.house) {
       return "Correct!";
    } else {
      return `No, ${character.name} is in ${character.house}`;
    }
  };

  
  
  export default function App() {
    const [character, setCharacter] = useState()
    const [house, setHouse] = useState()
    const [answer, setAnswer] = useState(false)
    const [DisplayGame, setDisplayGame] = useState (false)
    const [DisplayStart, setDisplayStart] = useState (true)
    // const [DisplayCharacter, setDisplayCharacter] = useState (false)
    

    
  
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
        return (`Correct! ${character.name} is in ${character.house} at ${character.school}`)
      } else {
        return (`No, ${character.name} is in ${character.house}`)
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
        {/* START GAME CONTAINER + STATE */}
        {DisplayStart === false || answer === true ? (null) : (
       <Container>
         <Header>Are you a Potterhead?</Header>
         <Button
        title="Find out!"
        onPress={() => {
          handleFetchCharacters()
          setDisplayStart(false)
          setDisplayGame(true)
        }}>
      </Button>
       </Container>
       )}

       {/* GAME COMP */}

        {DisplayGame === false ? (null) : (
          <Container>
            <Writing>In which house does</Writing>
          <Header>
            {character.name}
          </Header>
          <Writing>belong?</Writing>
         <Button
              title="Gryffindor"
              onPress={() => {
                setAnswer(houseMatch("Gryffindor", character));
                setDisplayGame(false);
              }}>
              Gryffindor
            </Button>
            <Button
              title="Slytherin"
              onPress={() => {
                setAnswer(houseMatch("Slytherin", character));
                setDisplayGame(false)
              }}>
              Slytherin
            </Button>
            <Button
              title="Hufflepuff"
              onPress={() => {
                setAnswer(houseMatch("Hufflepuff", character));
                setDisplayGame(false)
              }}>
              Hufflepuff
            </Button>
            <Button
              title="Ravenclaw"
              onPress={() => {
                setAnswer(houseMatch("Ravenclaw", character));
                setDisplayGame(false)
              }}>
              Ravenclaw
            </Button>
          </Container>
        )}
        {/* ANSWER COMP */}
        {/* Display answer if given */}
        {answer === false ?   (null)  : (
          <Container>
          <AnswerBlock>
            <Writing>{answer}</Writing>
          </AnswerBlock>
        <Button
        title="New character!"
        onPress={() => {
          handleFetchCharacters()
          setDisplayGame(true)
        }}></Button>
        </Container>
        )}
      </Container>
    )
  }