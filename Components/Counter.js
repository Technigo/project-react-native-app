import React, { useState } from "react"
import styled from "styled-components/native"
import { Text, View, StyleSheet, Button } from 'react-native'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Push
        title="Tryyyck"
        onPress={() => setCount(count + 1)} />
      <Title>{count}</Title>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: powderblue;
  align-items: center;
  justify-content: space-around;
  paddingTop: 60;
`

const Title = styled.Text`
  font-size: 42px;
  color: palevioletred;
`

const Push = styled.Button`
color: palevioletred;
font-size: 32px;
`
