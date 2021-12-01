import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import styled from 'styled-components/native'

const QuoteText = styled.Text`
    font-weight: 700;
`
const APIButton = styled.TouchableOpacity`
    width: 50%;
    background-color: green;
`

const ButtonApi = () => {
    const [quote, setQuote] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        generateQuote()
    }, [])

	const generateQuote = () => {
        setLoading(true)
		fetch('http://api.quotable.io/random')
            .then((res) => res.json())
            .then((data) => setQuote(data))
            .finally(() => setLoading(false))
	}

    if (loading) {
        return <ActivityIndicator />
    }

    return (
        <View>
            <Text>Click Button to generate Quite!</Text>
            <APIButton onPress={generateQuote}><Text>Click!!!!</Text></APIButton>
            <QuoteText>Quote: {quote.content}</QuoteText>
        </View>
    )
}

export default ButtonApi