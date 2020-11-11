import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import styled from 'styled-components/native'

import Quote from './Quote'

const MyButton = styled.Text`
        margin: 20px;
        padding: 20px;
        backgroundColor: 'lightgrey';
`

export const ButtonComp = () => {
    return (
        <Text>
        < Button 
            title="today's mantra"
            color="pink"
            onPress={(Quote)} >
        </Button >
        </Text>
    )
}