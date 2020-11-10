import React from "react";
import styled from 'styled-components/native'
import { TouchableHighlight, View } from "react-native";


export const ButtonText = styled.Text`
font-family: BrixSlab-Black;
font-size: 20px;
color: #DFB4B6;
width: 150px;
background-color: #393B6A;
border-radius: 6px;
padding: 15px 10px 10px 10px;
overflow: hidden;
`

export const Button = ({onPress, text}) => {
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
