import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import ShareText from './ShareText'

const MainContainer = styled.View`
    flex: 1;
    background-color: whitesmoke;
    justify-content: space-evenly;
    align-items: center;
`

const Container = styled.View`
    margin: 20px;
    padding: 20px;
`

const DogInformationText = styled.Text`
    font-size: 24px;
    text-align: center;
    color: black;
`

const ButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: pink;
    color: black;
    padding: 15px;
    border-radius: 10px;
`

const ShareButton = styled.TouchableOpacity`
    background-color: whitesmoke;
    color: black;
    padding: 6px;
    border-radius: 10px; 
`
const ShareButtonText = styled.Text`
    font-size: 20px;
    font-weight: 300;
    text-align: center;
`

const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: 500;
`
const DogPageImage = styled.Image`
    margin: 0 auto;
    width: 80px;
    height: 80px;
`

export const DogFactsPage = ({ navigation }) => {
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
                <ButtonText>Click here to get random dog facts!</ButtonText>
            </ButtonTouchableOpacity>
            <Container>
                <DogInformationText>
                    {randomFact}
                </DogInformationText>
            </Container>
            <DogPageImage
            source={require('../assets/dog.png')}
            />
            <ShareButtonText>
                Interesting right? Share this fact with a friend!
            </ShareButtonText>
            <ShareButton>
                <ShareText fact={randomFact}/>
            </ShareButton>
       </MainContainer>
    )
}