import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const ButtonApi = () => {
    const [quote, setQuote] = useState({});

    const APIButton = styled.TouchableOpacity`
    background-color: rgb(255, 255, 255);
    justify-content: center;
    width: 150;
`

    const generateQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data => setQuote(data))
    }

    useEffect(() => {
        generateQuote();
    }, [])

    return (
        <View>
            <Text>{quote.author}</Text>
            <Text>{quote.content}</Text>
            <APIButton
                onPress={generateQuote}
            >
                <Text>New quote</Text>
            </APIButton>
        </View>
    )
}

export default ButtonApi
