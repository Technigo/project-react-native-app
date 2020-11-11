import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components/native'

import { Quote } from './Quote'



const Container = styled.View`
  flex: 1;
  background-color: #C76F7D;
  justify-content: center;
  align-items: center;
  padding: 25px;
`
// papayawhip

const App = () => {
  const [quotes, setQuotes] = useState([])
  const [activeQuote, setActiveQuote] = useState('Loading...')

  const getRandomQuote = (array) => {
    return array[Math.floor(Math.random() * (array.length - 1))].text
  }

  const updateQuote = () => {
    const randomQuote = getRandomQuote(quotes)
    setActiveQuote(randomQuote)

  }

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const filteredData = data.filter(quote => {
          return quote.author !== null && quote.author !== 'Donald Trump'
        })

        setQuotes(filteredData)
        setActiveQuote(getRandomQuote(filteredData))
      })
  }, [])

  return (
    <Container>
      <View>
        <Quote quote={activeQuote} />
        < Button
          title="today's mantra"
          color="#C76F7D"
          onPress={updateQuote} >
        </Button >
      </View>
    </Container>

  )
}

export default App
