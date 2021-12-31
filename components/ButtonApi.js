import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
    font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
    width: 50%;
    background-color: green;
`

const ButtonApi = () => {
    const [quote, setQoute] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        generateQuote();
    }, []);

    const generateQuote = () => {
        setLoading(true);
        fetch('http://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => setQoute(data))
        .finally(() => setLoading(false));
    };

    if (loading) {
        return <ActivityIndicator/>
    }

    return (
    <View>
        <Text>Click button to generate quote!</Text>
        <APIButton onPress={generateQuote}>
            <Text>Click clock</Text>
        </APIButton>
        <QuoteText>Quote: {quote.content}</QuoteText>
        <Text>Author: {quote.author}</Text>
    </View>
    )};

export default ButtonApi;

//5124
