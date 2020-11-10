import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
flex: 1
width: 100%
background-color: #180137
justify-content: center
align-items: center
margin-bottom: 30px
`
const HeaderText = styled.Text`
font-size: 35px
margin-top: 35px
color: #fff
text-align: center

`


export const Header = () => {
  return (
    <Container>
      <HeaderText>
        Walk to render Carrie Fisher quotes!
        </HeaderText>
    </Container>
  )
}