import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import { useSelector, useDispatch } from 'react-redux'

import { generateQuote } from '../reducers/quotes'
import { Button } from 'react-native'


const API_URL = 'https://api.quotable.io/random?author=Confucius'
const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 24px;
	color: black;
`


const FetchQuote = () => {


  const dispatch = useDispatch()

  const quote = useSelector(store => store.quotes.quote)

const onQuoteGenerate = () => {
  dispatch(generateQuote())
}



  return (
    <Container>
      <Title>{quote}</Title>
      <Button title='Generate a quote' onPress={onQuoteGenerate} />
    </Container>

  )
}

export default FetchQuote