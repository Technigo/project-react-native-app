import React, { useState, useEffect } from "react";
import { Text, View, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const QuoteText = styled.Text`
    font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
    width: 50%;
    background-color: yellow;
`;

const ButtonApi = () => {
    const [stuff, setStuff] = useState();
    const [loading, setloading] = useState();

    useEffect(() => {
        genQuote()
    }, [])

    const genQuote = () => {
        setloading(true)
        fetch("http://api.quotable.io/random")
            .then((res) => res.json())
            .then((data) => setStuff(data))
            .finally(() => setloading(false))
    };

    if (loading) {
        return (<ActivityIndicator />)
    }

    return (
        <View>


            <APIButton onPress={genQuote}><Text>Click!</Text></APIButton>
            <QuoteText>Quote: {stuff?.content}</QuoteText>
            <Text>Author: {stuff?.author}</Text>
        </View>
    );
};

export default ButtonApi;
