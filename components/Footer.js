import React from 'react'
import styled from 'styled-components/native'

export const Footer = () => {
    const Container = styled.View`
    flex: 1;
    background: #F0CDB7;
    width: 100%;
    justify-content: center;
    align-items: center;
    `

    const FooterText = styled.Text`
    color: #000;
    font-size: 25px;
    font-weight: 500;
    `
    
    return(
    <Container>
        <FooterText>
            This is a footer
        </FooterText>
    </Container>
    )
}