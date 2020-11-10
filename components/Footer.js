import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
flex: 0.5
width: 100%
background-color: #fcba03
justify-content: center;
align-items: center;
`

const FooterText = styled.Text`
font-size: 15px
color: #1f1f1f
`

export const Footer = () => {
  return(
    <Container>
        <FooterText>
        This is a project made via the Technigo front-end bootcamp, Fall 2020.
        </FooterText>
    </Container>
    )
}