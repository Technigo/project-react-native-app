import React from 'react'
import { View, Button } from 'react-native'
import { StyledText } from './StyledText'


export const Question = () => {

  // const shakePhone = () => {
  //   if (firstView) {
  //     showAnswer()
  //     setTimeout(() => setViewOne(!firstView), 2000);
  //   } else { setFirstView(!firstView)

  //   }
  // }

  return (
    <View>
      <StyledText>Shake me if you want some advice</StyledText>
      <Button
        title='GET ADVICE'
        onPress={() => shakePhone()}
      />
    </View>
  )
}