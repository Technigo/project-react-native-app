import React, { useState, useEffect } from "react";
import { View, Text, TouchableHighlight, ActivityIndicator } from 'react-native'
import styled from "styled-components/native";

//react-native doesn't understand html, because it is for browsers. We use core-components instead:
const QuoteText = styled.Text`
font-weight: 600;
margin: 10px;
`
const AuthorText = styled.Text`
margin: 10px;
`
const EndText = styled.Text`
margin: 30px;
font-weight: 350;
color: yellow;
`
const APIButton = styled.TouchableHighlight`
width: 105px;
border: 3px solid yellow;
border-radius: 20px;
padding: 10px;
font-weight: 600;
background-color: white;
color: yellow;

`
const InfoView = styled.View`
justify-content: center;
`

const StyledView = styled.View`
margin: 10px;
padding: 18px;
opacity: 0.8;
justify-content: center;
align-items: center;
background-color: lightblue;
`

const ButtonApi = () => {
    const [quote, setQuote] = useState({})
    //const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false)
    
    useEffect (() => {
        generateQuote(true)
    }, [])

    const generateQuote = () => {
        setLoading(true)
        fetch('http://api.quotable.io/random')
        .then(res => res.json())
        .then((quote) => setQuote(quote))	
        .finally(() => setLoading(false))
    }
    if (loading) {
        return <ActivityIndicator />
    }	
    return (
        <StyledView>
            <APIButton onPress= {generateQuote}>
                <Text>NEW QUOTE</Text>
            </APIButton>
            
            <InfoView> 
                <QuoteText>Quote: {quote.content} </QuoteText>
                <AuthorText>Author: {quote.author}</AuthorText>
            </InfoView>

            <EndText>(To get at a new quote, just press the button)</EndText>
        </StyledView>
    )
}        

export default ButtonApi