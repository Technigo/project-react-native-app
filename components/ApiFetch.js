import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import styled from 'styled-components/native'

const ApiFetch = () => {
  const [quote, setMovie] = useState({})

  const generateQuote = () => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
      .then((res) => res.json())
      .then((data) => setMovie(data))
  }
  const ApiFetch = styled.Button``

  useEffect(() => {
    generateQuote()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>"{quote.en}"</Text>
      <Text style={styles.author}>{quote.author}</Text>
      <ApiFetch title="Generate more wisdom" onPress={generateQuote} />
    </View>
  )
}

export default ApiFetch

const styles = StyleSheet.create({
  container: {
    alignItems: 'left'
  },
  quoteText: {
    fontSize: 22,
    color: '#56858f',
    lineHeight: 40,
    marginBottom: 30,
    width: 400
  },
  author: {
    color: 'black',
    marginBottom: 30
  }
})
