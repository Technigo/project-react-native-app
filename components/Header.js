import React from 'react'
import styled from 'styled-components/native'

export const Header = () => {

const Container = styled.View`
flex: 0.2;
width: 100%;
justify-content: center;
align-items: center;
background: #fff;
`
const Heading = styled.Text`
font-size: 38px;
color: #000;
font-weight: 600;
`
return (
<Container>
    <Heading>This is Header</Heading>
</Container>
)
}