import React from 'react'
import { useState } from 'react';
import styled from 'styled-components/native'
import { GiphyChoice } from './components/StyledPicker'

// const api_key = "lByN5BPEwk9MR74phtPh0JpBBBBWyuVH";


const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  text-align: center;
`

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  `

export default function App() {
  return (
    <Container>
      <Title> Make someone happy</ Title>
      <Title>by sharing a Giphy!</Title>
      <GiphyChoice />
    </Container>
  );
}


