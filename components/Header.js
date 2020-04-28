import React from 'react'
import styled from 'styled-components/native'

const Title = styled.Text`
  font-size: 24px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`

const Container = styled.View`
  height: 50;
  width: 200;
  text-align: center;
`

export default function Header(props) {
  return (
    <Container>
      <Title >{props.title}</Title>
    </Container>
  )
}

