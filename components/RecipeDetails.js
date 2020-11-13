import React from 'react'
import styled from 'styled-components/native'

import { Container } from './Container'
import { Text, Headline } from './Text'

const Wrapper = styled.View`
flex: 1;
background: #000;
`

export const RecipeDetails = ({ heading, instructions }) => {
    return (
        <Wrapper>
            <Container>
                <Headline>{heading}</Headline>
                {console.log('this is',heading)}
                <Text>{instructions}</Text>
            </Container>
        </Wrapper>
    )
}