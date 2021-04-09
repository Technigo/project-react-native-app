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

const CatInformationText = styled.Text`
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

export const CatFacts = () => {
    const [catFacts, setCatFacts] = useState([])
    const [randomFact, setRandomFact] = useState('')

    useEffect(() => {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then((res) => res.json())
        .then(json => {
            setCatFacts(json)
        })
    }, [])

    const onPressRandomFact= () => {
         setRandomFact(catFacts[Math.floor(Math.random() * catFacts.length)].text)
    }

    return(
        <>
        <Container>
            <CatInformationText>
                {randomFact}
            </CatInformationText>
        </Container>
        <ButtonTouchableOpacity
            onPress={onPressRandomFact}
        >
            <ButtonText>New Fact!</ButtonText>
       </ButtonTouchableOpacity>
       </>
    )
}

