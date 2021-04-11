import React from 'react'
import styled from 'styled-components/native'



const Container = styled.View`
  background-color: #e39c9c;
  height: 80px;
  align-items: center;
  justify-content: center;
`
const HeaderText = styled.Text`
  font-size: 46px;
  font-style: italic;
  font-weight:bold;
`

export const Header = (props) => {

  return (
    <Container>
      <HeaderText>{props.text}</HeaderText>
    </Container>
  )
}