import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'


const Container = styled.View`

margin-top: 30px;
`

const Setup = styled.Text`

text-align: center;
color: #ffffff;
font-size: 45px;
margin: 10px 10px 30px;

`
const Punch = styled.Text`

text-align: center;
color: #ffffff;
font-size: 30px;
margin: 0 10px 0;
font-style: italic;
`

export const Jokes = ({setup, punchline}) => {

    return (
        <Container>
            <Setup>{setup}</Setup>
            <Punch>{punchline}</Punch>
        </Container>
    )
}


