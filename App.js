import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator, Text } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`
const Button = styled.TouchableOpacity`
  background: black;
  position: absolute;
  top: 40;
  padding: 10px 15px;
  border-radius: 8;
`

const ButtonText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
`

const fetchData = async () => {
  const result = await fetch("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general")
  const json = await result.json()

  if (json.status_code === 34 || !json.setup || json.punchline) {
    return fetchData()
  } else {
    return json
  }
}

const App = () => {
  const [loading, setLoading] = useState(true)
  const [joke, setJoke] = useState("")

  const fetchJokeData = () => {
    setLoading(true)
    fetchData()
      .then((json) => {
        setJoke(json)
        setLoading(False)
      }).catch(error => {
        console.error(error);
        return { name: "network error", description: "" };
      })
  }

  useEffect(() => {
    fetchJokeData()
  }, [])

  return (
    <Container>
      {loading
        ? <ActivityIndicator size="large" color="#ffffff" />
        : <Text>{joke}</Text>}
      <Text>{joke}</Text>

      <Button onPress={fetchJokeData}>
        <ButtonText>Make me laugh</ButtonText>
      </Button>
    </Container>
  )
}

export default App