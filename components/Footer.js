import React from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Button, Text } from 'react-native'

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ff6464;
  padding: 50px;
  margin-top: 40px;
  width: 100%;
`
const Title = styled.Text`
  font-size: 16px;
  color: #fff5a5;
  text-transform: uppercase;
`

export const Footer = ({title}) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}