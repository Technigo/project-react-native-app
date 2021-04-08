import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const Header = styled.View`
  background-color: red;  
  justify-content: center;
  align-items: center;
  width: 100%
  border: 2px solid black;
  margin-top: 40px;
  padding: 15px;
`
const Knapp = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 60px;
  border-radius: 25px; 
  padding: 10px;
  `
const Title = styled.Text`
  font-size: 36px;
  color: white;
  margin: 20px;
  `

  const RecipeName = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin: 20px;
  `

const RecipeText = styled.Text`
  font-size: 20px;
  color: black;
  `

  const BtnText = styled.Text`
  font-size: 24px;
  color: white;`

const RecipeContainer = styled.ScrollView`
margin: 20px 0;
`
const Footer = styled.View`
  background-color: darkgreen;  
  justify-content: center;
  align-items: center;
  width: 100%
  border: 2px solid black;
  margin-top: 20px;
  padding: 15px;
`
const CreditText = styled.Text`
  font-size: 12px;
  color: black;
  margin-bottom: 0;
  `

const App = () => {
  const [tacos, setTacos] = useState ([])
  const [counter, setCounter] = useState (0)

const RandomRecipe = () => {
  setCounter(counter +1)
}

  useEffect(() => { 
    fetch('https://taco-randomizer.herokuapp.com/random/?full-taco=true') 
    .then(res => res.json()) 
    .then(json => setTacos(json))     
  }, [counter]) 
  
  return (
    <Container>
      <Header>
        <Title>Taco-randomizer!</Title>
      </Header>
      <RecipeContainer>
        <RecipeName>{tacos.name}</RecipeName> 
        <RecipeText>{tacos.recipe}</RecipeText>     
      </RecipeContainer>
      <Footer>
      <Knapp onPress={RandomRecipe}>
        <BtnText>Random Recipe</BtnText>
      </Knapp> 
      <CreditText>API: https://taco-randomizer.herokuapp.com/random/</CreditText>
      </Footer>  
    </Container>
  )
}

export default App