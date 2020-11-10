import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Button, Text } from 'react-native'

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ff6464;
  padding: 50px;
`
const Title = styled.Text`
  font-size: 24px;
  color: #fff5a5;
`

export const Footer = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}