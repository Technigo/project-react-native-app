import React from "react";
import { TouchableHighlight, View } from "react-native";
import { ButtonText } from './ButtonText'
import { Question } from "./Question";
import { NavigationContainer } from '@react-navigation/native'

export default function TouchableButton({onPress, text}) {
  return (
    <View>
      <TouchableHighlight
        onPress={onPress}
      >
        <ButtonText>{text}</ButtonText>
      </TouchableHighlight>
    </View>

  )
}