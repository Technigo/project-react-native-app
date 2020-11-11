import React, { useState, useEffect } from 'react'
import { View, Text, } from 'react-native'
import styled from 'styled-components/native'




export const Quote = () => {
    const [quotes, setQuotes] = useState([])

    const getRandomQuote = () => {
        return quotes[Math.floor(Math.random() * (quotes.length - 1))].text
    }

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const filteredData = data.filter(quote => {
                    return quote.author !== null && quote.author !== 'Donald Trump'
                })

                setQuotes(filteredData)
            })
    }, [])


    const Text = styled.Text`
        font.size: 15px;
        color: #F8CCC4;
        text-align: center;
        `

    if (quotes.length > 0) {
        return (
            <Text> {` ${getRandomQuote()}`} </Text>
        )
    } else {
        return (
            <Text>Loading...</Text>
        )
    }

}


