import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, TouchableOpacity } from "react-native"

export const GameWon = ({navigation}) => {
  return (
    <View>
      <Text>Good Work!</Text>
      <Text>You helped Ducky find his way home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Start')}>
        <Text>Play again</Text>
      </TouchableOpacity>
    </View>
  )
}