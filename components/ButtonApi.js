import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

const QuoteText = styled.Text`
  font-weight: 700;
`
const ApiButton = styled.TouchableHighlight`
  background-color: green;
  width: 50%;
`

export const ButtonApi = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    generateQuote()
  }, [])

  const generateQuote = () => {
    setLoading(true)
    fetch('http://api.quotable.io/random')
      .then(res => res.json())
      .then(res => setQuote(res))
      .finally(() => setLoading(false))
  }

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <View>
      <Text>Hej</Text>
      <ApiButton onPress={generateQuote}>
        <Text>Touch Here</Text>
      </ApiButton>

      <QuoteText>Quote: {quote.content}</QuoteText>
      <Text>Quote: {quote.author}</Text>
    </View>
  )
}
