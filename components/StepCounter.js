import React from 'react'
import styled from 'styled-components/native'
import { Pedometer } from "expo-sensors";


const Title = styled.Text`
  font-size: 24px;
  padding: 14px;
  color: black;
`
const Container = styled.View`
  background-color: #F8EFBA;
`

const StepCounter = () => {
  return (
    <Container>
      <Title>text</Title>
    </Container>
  )
}

export default StepCounter