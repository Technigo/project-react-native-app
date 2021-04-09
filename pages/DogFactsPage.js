import React, { useEffect, useState } from 'react'
import { Text, Button, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'


const Container = styled.View `
background-color: papayawhip;
justify-content: center;
align-items: center;
margin: 20px;
padding:10px;
border-radius: 10px;
`

const DogInformationText = styled.Text`
  font-size: 24px;
  text-align: center;
  color: black;
`

const ButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: white;
    color: black;
    padding: 8px;
    border-radius: 10px;
    
`

const ButtonText = styled.Text`
    font-size: 20px;
`

export const DogFactsPage = () => {
    const [dogFacts, setDogFacts] = useState([])
    const [randomFact, setRandomFact] = useState('')

    useEffect(() => {
    fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
        .then((res) => res.json())
        .then(json => {
            setDogFacts(json)
        })
    }, [])

    const onPressRandomFact= () => {
        return setRandomFact(dogFacts[Math.floor(Math.random() * dogFacts.length)].fact)
    }

    return(
        <>
        <Container>
        <Text>Random Cat Facts</Text>
            <DogInformationText>
                {randomFact}
            </DogInformationText>
        </Container>
        <ButtonTouchableOpacity
            onPress={onPressRandomFact}
        >
            <ButtonText>Show me more!</ButtonText>
       </ButtonTouchableOpacity>
       </>
    )
}