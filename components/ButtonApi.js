import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const APIButton = styled.TouchableOpacity`
    background-color: rgb(255, 255, 255);        
    width: 250%;        
    align-self: center;
    margin: 20px;
    padding: 10px;
    border-radius: 25px;
`

const ParentContainer = styled.View`
    margin: 20px;
`

const HeaderText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 20px;
`

const ButtonApi = () => {
    const [quote, setQuote] = useState({});

    const generateQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => setQuote(data))
    }

    useEffect(() => {
        generateQuote();
    }, [])

    return (
        <ParentContainer>
            <HeaderText>{quote.author}</HeaderText>
            <Text>{quote.content}</Text>
            <APIButton
                onPress={generateQuote}
            >
                <Text>New quote</Text>
            </APIButton>
        </ParentContainer>
    )
}

export default ButtonApi
