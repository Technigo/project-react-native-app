import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'


const ButtonAPI = () => {

    const [quote, setQuote] = useState({})

    const generateQuote = () => {
        fetch('https://api.quotable.io/random')
        .then(res => res.json())
        .then(data  => setQuote(data))
    }

    const QuoteContent = styled.Text`
      font-size: 22px;
      background-color: #655D8A;
      color: white;
      padding: 60px; 
      line-height: 30px;
    `

    const QuoteAuthor = styled.Text`
      font-size: 16px;
      font-style: italic;
      text-align: right;
      padding-right: 12px;
      padding-bottom: 6px;
      background-color: #655D8A;
      color: #FFEEEE;
    `

    const APIButton = styled.TouchableOpacity`
      width: 100%;
      background-color: #D885A3;
      padding: 30px;
      border-radius: 6px;
      margin-top: 20px;
    `

    const APIButtonText = styled.Text`
      font-size: 20px;
      color: white;
    `
 
    useEffect(() => {
        generateQuote() 
    }, [])

    return (
        <>
        <View>
          <QuoteContent>"{quote.content}"</QuoteContent>
          <QuoteAuthor>{quote.author}</QuoteAuthor>
        </View>
        <View>
          <APIButton onPress={generateQuote}>
            <APIButtonText>New Quote 🤍</APIButtonText>
          </APIButton>        
        </View>
        </>
    )
}

export default ButtonAPI