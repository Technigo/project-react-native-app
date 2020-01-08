import React from 'react'
import styled from "styled-components/native"

const View = styled.View`
flex: 1;
`

const Instruction = styled.Text`
  margin-top: 30px;
  color: white;
  font-style: italic;
`

export function Header() {
  return (
<View>
<Instruction>{"Swipe down for new recipe"}</Instruction>
</View>
  )
}
