import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import { JOKE_API } from '../reusable/urls'

const Container = styled.View`
flex: 1;
background-color: papayawhip;
justify-content: center;
align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const Main = styled.View`
background-color: papayawhip;
justify-content: center;
align-items: center;
padding: 30px ; 
`

const Button = styled.TouchableOpacity`
width: 50%;
padding: 10px
border: 2px solid black;
border-radius: 25px;
height: 60px;
background-color: grey;
justify-content: center;
align-items: center;
`

const ButtonContainer = styled.View`
width: 100%;
justify-content: center;
align-items: center;
`

const Header = styled.View`
background-color: grey
justify-content: center;
align-items: center;
width: 100%;
padding: 15px;
margin-top: 60px;
`

const Jokes = () => {
  const [houses, setHouses] = useState([])
  const [updateJoke, setUpdateJoke] = useState(0)

  const onUpdateJoke = () => {
    setUpdateJoke(updateJoke + 1)
  }

  useEffect(() => {
    fetch(JOKE_API)
      .then(res => res.json())
      .then(data => setHouses(data))
  }, [updateJoke])

  return (
    <Container>
      <Header>
        <Title>Get a new superfunny joke everytime you press the button below!</Title>
      </Header>
      <Main>
        <Title>{houses.joke}</Title>
      </Main>
      <ButtonContainer>
        <Button onPress={onUpdateJoke}>
          <Title>Press me</Title>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default Jokes
