import React from 'react'
// import { Modal, Text, View, Alert } from 'react-native';
import styled from 'styled-components/native'

const allAdvice = [
  'Yes, of course.',
  'Yes, absolutely.',
  'Go for it.',
  'That could work.',
  'You should not.',
  'Oh no.',
  'Think again.',
  'Absolutely not.',
  'Perhaps.',
  'Just do not.',
  'Never.'
]

const myAdvice =
  allAdvice[
  Math.floor(Math.random() * allAdvice.length)
  ]


export const Advice = () => {

  return (
    <RandomAdvice>{myAdvice}</RandomAdvice>
  )
}


// STYLING
const RandomAdvice = styled.Text`
  color: white;
  font-size: 36px;
`