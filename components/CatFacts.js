import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'



const ButtonText = styled.Text`
  font-size: 25px;
    ` 
const Container = styled.View`
  flex: 1;
  `

const FactsContainer = styled.View`
  flex: 1;
  `

const ButtonContainer = styled.View`
  flex: 1;
  `
const Button = styled.TouchableOpacity`
  background-color: red;
  `

const CatImage = styled.Image`
  width: 270px;
  height: 270px;
  background-color: blue;
  color: black;
  `


export const CatFacts = () => {
  const [facts, setFacts] = useState({})      
    
  const fetchFacts = () => {
    fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((json) => {
        setFacts(json)
    })
  }   
     
  useEffect(() => {
    fetchFacts()
  }, [] )

  return (
  <>
    <Container>
      <FactsContainer>
        <CatImage source={{uri: facts.file}} />
      </FactsContainer>
      <ButtonContainer>
        <Button onPress={fetchFacts}>
            <ButtonText>Next cat fact!</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  </>
  )
}