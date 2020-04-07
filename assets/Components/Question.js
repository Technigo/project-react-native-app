import React from 'react'
import { View } from 'react-native'
import { StyledText } from './StyledText'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'


export const Question = () => {
  const [fontsLoaded] = useFonts({
    'BrixSlab-Black': require('../fonts/BrixSlab-Black.otf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View>
        <StyledText>Shake me if you want some advice</StyledText>
      </View>
    )
  }
}