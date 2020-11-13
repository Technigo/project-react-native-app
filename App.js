import React, { useState, useEffect } from 'react'
import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback, Vibration } from 'react-native'
import styled from 'styled-components/native'

import { Quote } from './Quote'


const Container = styled.View`
  flex: 1;
  background-color: #C76F7D;
  justify-content: center;
  align-items: center;
  padding: 25px;
`

const ButtonText = styled.Text`
  color: #F8CCC4;
  font-size: 30px;
  text-align: center;
`

const App = () => {
  const [mantraFade, setMantraFade] = useState(new Animated.Value(0))
  const [buttonFade, setButtonFade] = useState(new Animated.Value(1))
  const [quotes, setQuotes] = useState([])
  const [activeQuote, setActiveQuote] = useState()
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [buttonText, setButtonText] = useState("Take a Deep Breath Then Tap Here for Today's Mantra")

  const getRandomQuote = (array) => {
    return array[Math.floor(Math.random() * (array.length - 1))].text
  }

  const updateQuote = () => {
    if (buttonDisabled) {
      return
    }

    // const showDate = () => {
    //   let date = new Date().getDate()
    //   let month = new Date().getMonth() + 1
    // }

    // showDate(date + '/' + month)

    setButtonDisabled(true)
    Vibration.vibrate()

    Animated.timing(buttonFade, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {

      setButtonText('')

      const randomQuote = getRandomQuote(quotes)
      setActiveQuote(randomQuote)

      Animated.timing(mantraFade, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }).start()
    })
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
      })
  }, [])

  return (
    <Container>

      <Animated.View
        style={[
          {
            opacity: mantraFade
          }
        ]}>
        <Quote quote={activeQuote} />
      </Animated.View>

      <Animated.View
        style={[
          {
            opacity: buttonFade
          }
        ]}>
        <TouchableWithoutFeedback
          onPress={updateQuote}
        >
          <ButtonText>{buttonText}</ButtonText>
        </TouchableWithoutFeedback >
      </Animated.View>

    </Container>

  )
}

export default App
