import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const Quote = (quote) => {

    const Text = styled.Text`
        font.size: 15px;
        color: #F8CCC4;
        text-align: center;
        `

    return (
        <Text> {` ${quote.quote}`} </Text>
    )

}


