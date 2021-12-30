import React, { useState, useEffect } from "react";
import {
        View,
        Text,
        ActivityIndicator,
        Button,
        Pressable,
        StyleSheet
    } from 'react-native';

import styled, { withTheme } from "styled-components/native";

const QuoteText = styled.Text`
    font-weight: 700;
`;

const ButtonApi = () => {

    const [quote, setQuote] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        generateQuote()
    }, [])

    const generateQuote = () => {
        setLoading(true)
		fetch('https://api.quotable.io/random')
			.then(response => response.json())
			.then(data => setQuote(data))
            .finally(() => setLoading(false))
	}

    if (loading) {
        return (
            <ActivityIndicator
                size="large"
                color="silver"
            />
        )
    }

    return(
        <View style={styles.view}>
            <Pressable
                onPress={generateQuote}
                style={styles.pressable}
            >
                <Text>Click to generate a quote</Text>
            </Pressable>
            <QuoteText style={styles.quotetext}>
                {quote.content}
            </QuoteText>
            <Text style={styles.author}>- {quote.author}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '50%',
        display: 'flex',
        alignItems: 'center'
    },
    pressable: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: '50%',
        color: 'white',
        backgroundColor: 'steelblue'
    },
    quotetext: {
        marginTop: 8,
    },
    author: {
        marginBottom: 8,
    }
})

export default ButtonApi