import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const Quote = (quote) => {

    const Text = styled.Text`
        font.size: 15px;
        color: #F8CCC4;
        text-align: center;
        width: auto;
        height: 0px;
        `
    return (
        <Text> {` ${quote.quote}`} </Text>
    )

}


