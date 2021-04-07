import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'


const Container = styled.View`
display: flex;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
display: flex;

font-size: 36px;
font-weight: bold;
color: #aa0000;
flex-direction: row;
`

export const Jokes = ({setup, punchline}) => {

    return (
        <Container>
            <Title>{setup}</Title>
            <Title>{punchline}</Title>
        </Container>
    )
}


