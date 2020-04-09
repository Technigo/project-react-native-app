import React from 'react'
import { Text, View } from 'react-native';
import styled from "styled-components/native"

const Section = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 48px;
  color: white;
  text-align: center;
`

const Instruction = styled.Text`
  font-size: 22px;
  color: white;
  text-align: center;
`



export const Introduction = () => {

  return (
    <Section>
      <Title>Welcome to Madame Emma's guidance</Title>
      <Instruction>Think about your troubles and click the magic button. 🔮</Instruction>
    </Section>
  )
}