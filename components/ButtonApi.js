import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Button, Linking, Image, ImageBackground, Div} from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
    font-weight: 700;
    color: white;
    font-size: 20px;
`;

const APIButton = styled.TouchableOpacity`
    width: 50%;
    padding: 10px;
    margin: 5px;
    background-color: green;
    text-align: center; 
    border-radius: 20px;
`;

const WelcomeText = styled.Text`
    color: white;
    font-size: 18px;
    padding: 15px;
`;

const ButtonText = styled.Text`
    font-weight: bold;
`;

const ScreenBackground = styled.ImageBackground`
    justify-content: center;
    height: 100%;
`;

const Box = styled.View`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px;
`;

const ButtonApi = () => {
    const [quote, setQoute] = useState({});
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState({});

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

    fetch(URL)
        .then((res) => res.json())
        .then((data) => console.log(data));

    if (loading) {
        return <ActivityIndicator/>
    }

    return (
    <ScreenBackground source={require('../assets/typewriter.jpg')}>
        <Box>
        <WelcomeText>Welcome to the quote machine:</WelcomeText>
        <APIButton onPress={generateQuote}>
            <ButtonText>Click me!</ButtonText>
        </APIButton>
        <QuoteText>"{quote.content}"</QuoteText>
        <WelcomeText>Author: {quote.author}</WelcomeText>
        </Box>
    </ScreenBackground>
    )};

export default ButtonApi;


