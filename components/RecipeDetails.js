import React from 'react'
import styled from 'styled-components/native'

import { Container } from './Container'
import { Text, Headline } from './Text'

const Wrapper = styled.View`
flex: 1;
background: #000;
`

export const RecipeDetails = (props) => {
    return (
        <Wrapper>
            <Container source={props.route.params.image}>
                {console.log(props.route.params.image)}
                <Headline>{props.route.params.heading}</Headline>
                <Text>{props.route.params.instructions}</Text>
            </Container>
        </Wrapper>
    )
}