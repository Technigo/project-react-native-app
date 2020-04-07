import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { StyledText } from './StyledText'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
import TouchableButton from './TouchableButton'

export const Answer = ({ onStartAgain }) => {
  const [fontsLoaded] = useFonts({
    'BrixSlab-Black': require('./BrixSlab-Black.otf'),
  })
  const [answer, setAnswer] = useState({})

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(json => setAnswer(json.slip))
  },[])

  console.log('answer', answer)

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View>
      <StyledText>{answer.advice}</StyledText>
      <TouchableButton onPress={onStartAgain} text="Try again" />
    </View>
    )
  }
}