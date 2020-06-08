import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export const Footer = () => {

  const [quote, setQuote] = useState([]);
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];

  useEffect (() => {
    fetch ("https://type.fit/api/quotes")
    .then ((res) => res.json())
    .then ((json) => {
      setQuote(json)
    })
  }, []);
 
  return (
        <View>
          <Text>{randomQuote}</Text>
       </View>
       
  )   
};
