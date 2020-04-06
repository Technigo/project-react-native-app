import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { StyledText } from './StyledText'

export const Answer = () => {
  const [answer, setAnswer] = useState([])

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(json => setAnswer(json['slip']['advice']))
    console.log(answer)
  },[])

  return (
    <View>
      <StyledText>{answer}</StyledText>
    </View>
  )
}