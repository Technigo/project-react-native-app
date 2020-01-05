import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'

const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 60px;
  top: 80;
  padding: 10px 20px;
  border-radius: 20px;
  background: white;
  color: black;
  border: solid 3px black;
  font-size: 40px;
  `
  const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #391F5C;
  position: absolute;
  height: 100%;
  width: 100%;
  `

const App = () => {
  // const [character, setCharacter] = useState()
  // const [loading, setLoading] = useState(true)

  // const fetchCharacterData = () => {
  //   setLoading(true)
  //   fetchRandomCharacter()
  //     .then((fetchCharacterData) => {
  //       setCharacter(fetchCharacterData)
  //       setLoading(false)
  //     })
  // }

  // useEffect(() => {
  //   fetchCharacterData()
  // }, [])

  const fetchRandomCharacter = () => {
    const characterIndex = (param) => {
      return Math.floor(Math.random() * param.length) - 1
    }
    const apiKey = "$2a$10$QO0C49uSavMxC6YqmS5me.3sTZykI3k22Hn8I8zO4t3LaAdmAzFBm"
    const url = "https://www.potterapi.com/v1/"
     
      fetch(`${url}characters/?key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
          let characterId = characterIndex(json)
          let character = (json[characterId])
          if (!character.house) {
            return fetchRandomCharacter()
          } else {
            return (
              <Container>
                <Text>
                  <h2>${character.name}</h2> 
                  <h4>${character.house}</h4>
                </Text>
              </Container>
            )
          }
      })
  }

  return (
    <Container>
      {/* {loading
        ? <ActivityIndicator size="large" color="#ffffff" />
        : <Movie movie={movie} />} */}

      <Button
      onPress={fetchRandomCharacter}
      title="Random character">
        <Text>
        Random character
        </Text>
      </Button>
    </Container>
  )
}

export default App