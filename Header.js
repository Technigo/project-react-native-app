import React from 'react'
import {Text, View} from 'react-native'

export default function Header (props) {
  return (
    <View>
      <Text> {props.title} </Text>

    </View>
  )
}