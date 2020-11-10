import React, { useState, useEffect } from 'react'
import { View, Text, } from 'react-native'
import styled from 'styled-components/native'

export const Quote = () => {
    const [quotes, setQuotes] = useState({})

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

    }, {})

    return (
        <Text> {` ${quotes[0]}`} </Text>
        
    )
}