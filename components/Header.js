import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
flex: 1
width: 100%
background-color: #1B1B1C
justify-content: center
align-items: center
margin-bottom: 30px
`
const HeaderText = styled.Text`
font-size: 35px
margin-top: 35px
color: #ad7d37
text-align: center
`
const Test = styled.Image`
width: 100%
margin-bottom: 30px
`

export const Header = () => {
  return (
    <Container>
      <Test source={require('./assets/cfq.png')}/>
      {/* <HeaderText>
        Walk to render Carrie Fisher quotes!
        </HeaderText> */}
    </Container>
  )
}