import React, { useState } from "react"
import styled from "styled-components/native"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"

export const ButtonApi = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  const generateArt = () => {
    setLoading(true)

    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false))
  }

  if (loading) return <ActivityIndicator />

  return (
    <View>
      <ApiButton onPress={generateArt}>
        <Text> Random Quote </Text>
      </ApiButton>
      <QuoteText> {quote.content}</QuoteText>
      <AutohorText> {quote.author}</AutohorText>
    </View>
  )
}

const QuoteText = styled.Text`
  font-weight: 700;
  color: wheat;
  font-weight: 700;
  margin: 3px 20px;
  padding: 5px;
`
const AutohorText = styled.Text`
  color: orange;
  font-style: italic;
  margin: 3px 20px;
`

const ApiButton = styled.TouchableOpacity`
  width: 150;
  background-color: orange;
  margin: 10px auto;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  display: flex;
`
