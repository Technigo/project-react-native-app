import React, { useState, useEffect } from 'react'
import { Button, TouchableOpacity, Text, View, StyleSheet, Alert } from "react-native";
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

const textStyle = styled.Text`
  font-size: 20px;
  font-family: 'Introspect-Bk';
  color: white;
`

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 10
  },
});


const App = () => {
  const [quoteArray, setQuoteArray] = useState([])
  const [quote, setQuote] = useState("test")
  const onPress = () => {
    setQuote(randomQuote(quoteArray));
  }

  const url = 'https://raw.githubusercontent.com/keypressingmonkey/stoicquotesapp/master/JSONFIles/quotes.json'

  let [fontLoaded] = useFonts({
    'Introspect-Bk': require('./assets/fonts/Introspect-Bk.otf'),
  })

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setQuoteArray(json.quotes);
        setQuote(randomQuote(json.quotes));
      })
  }, [])

  if (!fontLoaded || !quote) {
    return <AppLoading />
  } else {
    return (
      <Container>
        <QuoteContainer text={quote} textStyle={textStyle} />

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
        </TouchableOpacity>
      </Container>
    )
  }
}

export default App

const randomQuote = (array) => {
  let quote = array[Math.floor(Math.random() * array.length)].quote
  while (quote.length > 300) {
    quote = array[Math.floor(Math.random() * array.length)].quote
  }
  return quote
}