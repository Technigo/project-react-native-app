import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import { JOKE_API } from '../reusable/urls'
import background from '../assets/blue-brickwall.jpg'

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  `
const Header = styled.View`
  background-color: rgba(46, 32, 28, 0.7);
  width: 100%;
  padding: 30px;
  `
const HeaderTitle = styled.Text`
  font-size: 24px;
  color: white;
  `
const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color:  rgb(54, 69, 79);;
  text-shadow: 1px 1px rgb(255, 166, 201);
`
const Main = styled.ScrollView`
  padding: 0 30px ; 
  margin: 48px 20px;
  `
const Button = styled.TouchableOpacity`
  width: 50%;
  padding: 10px
  border: 2px solid black;
  border-radius: 25px;
  height: 60px;
  background-color: rgba(46, 32, 28, 0.7);
  justify-content: center;
  align-items: center;
  `
const ButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  `
const ButtonTitle = styled.Text`
  font-size: 24px;
  color: white;
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
    <Container source={background}>
      <Header>
        <HeaderTitle>Tap the button below and prepare to laugh 😂!</HeaderTitle>
      </Header>
      <Main>
        <Title>{houses.joke}</Title>
      </Main>
      <ButtonContainer>
        <Button onPress={onUpdateJoke}>
          <ButtonTitle>Tap me!</ButtonTitle>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default Jokes
