import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

const ButtonText = styled.Text`
  font-size: 25px;
  color: #c44862;
  ` 

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  `

const FactsContainer = styled.View`
  flex: 1;
  width: 100%;
  `

const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  `

const Button = styled.TouchableOpacity`
  background-color: #712e35;
  border: 4px solid;
  border-color: #c44862;
  width: 200px;
  margin-top: 90px;
  padding: 5px 2px 8px 2px;
  align-items: center;
  `

const CatImage = styled.Image`
  width: 260px;
  height: 260px;
  `

export const CatSection = () => {
  const [section, setSection] = useState({})      
    
  const fetchSection = () => {
    fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((json) => {
        setSection(json)
    })
  }   
     
  useEffect(() => {
    fetchSection()
  }, [] )

  return (
  <>
    <Container>
      <FactsContainer>
        <CatImage source={{uri: section.file}} />
      </FactsContainer>
      <ButtonContainer>
        <Button onPress={fetchSection}>
          <ButtonText>Next cat image!</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  </>
  )
}