import React from 'react'
import styled from 'styled-components/native'

import background from '../assets/banana.jpg'
import { Container } from './Container'

const HomeText = styled.Text`
font-size: 48px;
position: absolute;
`

export const HomeScreen = () => {
    return (
        <Container source={background}>
            <HomeText>What's for dinner?</HomeText>
        </Container>
    )
}