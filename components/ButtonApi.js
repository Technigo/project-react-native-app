import React, { useState, useEffect } from "react";
import { View, Text } from "react-native"
import styled from "styled-components/native";


const APIButton = styled.Button`
font-weight: 700;
background-color: blue;
width: 50%;
`


const ButtonApi = () => {
    const [quote, setQuote] = useState({})

    const generateQuote = () => {
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setQuote(data))
    }

    useEffect(() => {
        generateQuote()
    }, [])

    return(
        <View >
            <Text>
                {quote.content}
            </Text>
            <Text>
                {quote.author}
            </Text>
        <APIButton title="Click me!" onPress={generateQuote}/>
        
        </View>
    )
}

export default ButtonApi