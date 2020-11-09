import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
flex: 1
width: 100%
background-color: #fcba03
justify-content: center
align-items: center
margin-bottom: 30px
`
const HeaderText = styled.Text`
font-size: 40px
color: #fff
text-align: center
`


export const Header = () => {
  return (
    <Container>
      <HeaderText>
        XX to render a Carrie Fisher quote
        </HeaderText>
    </Container>
  )
}