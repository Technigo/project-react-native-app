import React from 'react'
import styled from 'styled-components/native'

import { Container, TextContainer } from './Containers'
import { Text, Headline } from './Text'

export const RecipeDetails = (props) => {
    return (
        <Wrapper>
            <Container source={{ uri: props.route.params.image }}>
                <TextContainer>
                    <Headline>{props.route.params.heading}</Headline>
                    <Text>{props.route.params.instructions}</Text>
                </TextContainer>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.View`
    flex: 1;
    background: #000;
    `
