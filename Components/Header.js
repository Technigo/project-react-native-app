import React from 'react'
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.container}>
         <Text style={styles.title}>Not another Chuck Norris-app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
     paddingTop: 95,
  },
  title: {
    fontSize: 20,
    color: "black",
    fontFamily: 'CourierNewPS-BoldMT'
  }
})