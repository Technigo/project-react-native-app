import React, { useEffect, useState } from 'react'
import { Text, Button, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const MainContainer = styled.View`
    flex: 1;
    background-color: whitesmoke;
    justify-content: space-evenly;
    align-items: center;
`

const Container = styled.View `
    margin: 20px;
    padding:10px;
`

const CatInformationText = styled.Text`
    font-size: 24px;
    text-align: center;
    color: black;
`

const ButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: pink;
    color: black;
    padding: 10px;
    border-radius: 10px;
    margin-top: 40px;
`

const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: 500;
`

const RestartButton = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 10px;
    background-color: pink;
    margin-bottom: 40px;
`


export const CatFactsPage = ({onRestartMainPage}) => {
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
         return setRandomFact(catFacts[Math.floor(Math.random() * catFacts.length)].text)
    }

    return(
        <MainContainer>
        <ButtonTouchableOpacity
            onPress={onPressRandomFact}
        >
            <ButtonText>Press me to get random cat facts</ButtonText>
       </ButtonTouchableOpacity>
        <Container>
            <CatInformationText>
                {randomFact}
            </CatInformationText>
        </Container>
       <RestartButton 
            onPress={onRestartMainPage}
       >
            <ButtonText>Back</ButtonText>
        </RestartButton>
       </MainContainer>
    )
}