import React, { useState, useEffect } from 'react'
import { AppLoading } from 'expo'
import { useFonts } from '@use-expo/font';
import QuoteContainer from './components/QuoteContainer';
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`
const ClickSurface = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  alignItems: center;
  backgroundColor: transparent;
`

const App = () => {
  const [quoteArray, setQuoteArray] = useState([])
  const [quote, setQuote] = useState("test")

  let [fontLoaded] = useFonts({
    'Introspect-Bk': require('./assets/fonts/Introspect-Bk.otf'),
  })

  const url = 'https://raw.githubusercontent.com/keypressingmonkey/stoicquotesapp/master/JSONFIles/quotes.json'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setQuoteArray(json.quotes);
        setQuote(randomQuote(json.quotes));
      })
  }, [])

  const onPress = () => {
    setQuote(randomQuote(quoteArray));
  }

  if (!fontLoaded || !quote) {
    return <AppLoading />
  } else {
    return (
      <Container>
        <QuoteContainer quote={quote} />
        <ClickSurface
          onPress={onPress}
        />
      </Container>
    )
  }
}

export default App

const randomQuote = (array) => {
  let quote = array[Math.floor(Math.random() * array.length)].quote
  while (quote.length > 210) {
    quote = array[Math.floor(Math.random() * array.length)].quote
  }
  return quote
}