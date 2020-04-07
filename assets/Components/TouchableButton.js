import React from "react";
import { TouchableHighlight, View } from "react-native";
import { ButtonText } from './ButtonText'

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