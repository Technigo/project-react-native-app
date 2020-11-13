import React from 'react'
import {Text} from 'react-native'
import {NewButton, ButtonText} from './StyledAppComponents'


export const HomeScreen = () => {
    return (
        <>
        <Text>Welcome! </Text>
        <NewButton><ButtonText>Start</ButtonText></NewButton>
        </>
    )
}