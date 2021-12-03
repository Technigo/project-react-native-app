import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { API_URL } from '../reusables/urls'

import styled from 'styled-components/native'

const QuoteText = styled.Text`
  font-size: 36px;
  font-style: italic;
`

const RandomQuoteApi = () => {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    generateQuote()
  }, [])

  const generateQuote = () => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setQuote(data))
      .catch(err => console.error(err))
	}

  return (
    <View>
      <QuoteText>"{quote.content}"</QuoteText>
      <Text style={styles.paragraph}>Author: {quote.author}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={generateQuote}>
           <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20
  }
})

export default RandomQuoteApi