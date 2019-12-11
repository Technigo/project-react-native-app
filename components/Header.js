import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 30,
    color: 'white',
  }
})