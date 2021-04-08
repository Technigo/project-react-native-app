import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'


const Container = styled.View`
border: 2px solid #800080;
`

const Setup = styled.Text`
border: 1px solid black;
text-align: center;
`
const Punch = styled.Text`
border: 1px solid black;
text-align: center;
`

export const Jokes = ({setup, punchline}) => {

    return (
        <Container>
            <Setup>{setup}</Setup>
            <Punch>{punchline}</Punch>
        </Container>
    )
}


