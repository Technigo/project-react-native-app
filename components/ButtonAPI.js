import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"
import styled from "styled-components/native" // use /native when you are styling core components

const QuoteText = styled.Text`
  font-weight: 700;
`

const APIButton = styled.TouchableHighlight`
  width: 50%;
  background-color: pink;
`

const ButtonAPI = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    generateQuote()
  }, [])

  const generateQuote = () => {
    setLoading(true)
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false))
  }

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <Text>Click button to generate quote!</Text>
      <APIButton onPress={generateQuote}>
        <Text>Click!</Text>
      </APIButton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Author: {quote.author}</Text>
    </View>
  )
}

export default ButtonAPI
