import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 0.5;
  width: 100%;
  background-color: #000;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.Text`
  font-size: 15px;
  color: #F4F4F4;
  text-align: center;
  padding: 10px;
`

export const Footer = () => {
  return (
    <Container>
      <FooterText>
        This is a project made via the Technigo front-end bootcamp, Fall 2020.
        </FooterText>
    </Container>
  )
}