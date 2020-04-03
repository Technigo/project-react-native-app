import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import axios from 'axios'

const Container = styled.View`
  flex: 1;
  background-color: #270F59;
  align-items: center;
  justify-content: center;
  padding: 50px;
`
const Button = styled.TouchableOpacity`
  background: #F272DD;
  position: absolute;
  bottom: 140;
  padding: 20px 25px;
  border-radius: 8;
`

const ButtonText = styled.Text`
  color: white;
  font-size: 20;
  font-weight: bold;
`

const Text = styled.Text`
  color: white;
  font-size: 20px;
`

const App = () => {
  const [loading, setLoading] = useState(true)
  const [joke, setJoke] = useState("")
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await axios("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general/")
      setJoke(`${result.data[0].setup} ${result.data[0].punchline}`)
      setLoading(false)
    }
    fetchData()
  }, [fetching])

  return (
    <Container>
      {loading
        ? (<ActivityIndicator size="large" color="#ffffff" />)
        : (<Text>{joke}</Text>)}

      <Button onPress={() => setFetching(!fetching)}>
        <ButtonText>Make me laugh</ButtonText>
      </Button>
    </Container>
  )
}

export default App