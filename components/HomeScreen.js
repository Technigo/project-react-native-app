import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { Button } from 'react-native'

import background from '../assets/banana.jpg'
import { Container } from './Containers'

export const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [])

    const navigateToRecipe = () => {
        navigation.navigate('Recipes')
    }

    return (
        <Container source={background}>
            <HomeText>What's for dinner?</HomeText>
            <Button title='Find out!' onPress={navigateToRecipe}></Button>
        </Container>
    )
}
const HomeText = styled.Text`
    font-size: 48px;
    `