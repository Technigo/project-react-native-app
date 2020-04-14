import React from 'react'
import styled from 'styled-components/native'

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const Container = styled.View`
  height: 50;
  background-color: white;
`

export default function Header(props) {
  return (
    <Container>
      <Title >{props.title}</Title>
    </Container>
  )
}

