import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Button, Text } from 'react-native'

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  padding: 50px;
`
const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

export const Header = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}