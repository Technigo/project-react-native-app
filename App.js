import React, { useState, useEffect } from 'react'
import { View, Text, Button, Animated, StyleSheet } from 'react-native'
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
  const [fade, setFade] = useState(new Animated.Value(0))
  const [quotes, setQuotes] = useState([])
  const [activeQuote, setActiveQuote] = useState('Loading...')

  const getRandomQuote = (array) => {
    return array[Math.floor(Math.random() * (array.length - 1))].text
  }

  const updateQuote = () => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 2000
    }).start()

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

      <Animated.View
        style={[
          {
            opacity: fade
          }
        ]}>
        <Quote quote={activeQuote} />
      </Animated.View>
      < Button
        title="today's mantra"
        color="#C76F7D"
        onPress={updateQuote} >
      </Button >

    </Container>

  )
}

const styles = StyleSheet.create({
  mantra: {

  }
})


export default App
