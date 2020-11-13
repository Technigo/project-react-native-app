import React from 'react'
import {Text} from 'react-native'

import {NewButton, ButtonText, Container} from './StyledAppComponents'

export const HomeScreen = ({navigation}) => {
    return (
        <Container>
            <Text>Welcome! </Text>
            <NewButton onPress={()=>navigation.navigate('Timer')}><ButtonText>Start</ButtonText></NewButton>
        </Container>
    )
}