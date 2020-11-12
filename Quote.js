import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

export const Quote = ({quote}) => {

    const Text = styled.Text`
        font.size: 30px;
        color: #F8CCC4;
        text-align: center;
        width: auto;
        font-weight: 200;
        `

    if (quote === undefined) {
        return (
            <Text></Text>
        )
    } else {
        return (
            <Text>{`${quote}`}</Text>
        )
    }
}


