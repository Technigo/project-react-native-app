import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'


const MainContainer = styled.View`
    flex: 1;
    background-color: whitesmoke;
    justify-content: space-evenly;
    align-items: center;
`

const Container = styled.View `
    align-items: center;
    margin: 20px;
`

const DogInformationText = styled.Text`
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

export const DogFactsPage = ({onRestartMainPage}) => {
    const [dogFacts, setDogFacts] = useState([])
    const [randomFact, setRandomFact] = useState('')

    useEffect(() => {
    fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all')
        .then((res) => res.json())
        .then(json => {
            setDogFacts(json)
        })
    }, [])

    const onPressRandomFact = () => {
        return setRandomFact(dogFacts[Math.floor(Math.random() * dogFacts.length)].fact)
    }

    return(
        <MainContainer>
            <ButtonTouchableOpacity onPress={onPressRandomFact}>
                <ButtonText>Press me to get random dog facts!</ButtonText>
            </ButtonTouchableOpacity>
            <Container>
                <DogInformationText>
                    {randomFact}
                </DogInformationText>
            </Container>
            <RestartButton onPress={onRestartMainPage}>
                <ButtonText>Back</ButtonText>
            </RestartButton>
       </MainContainer>
    )
}