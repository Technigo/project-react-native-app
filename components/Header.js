import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.headerText}>{props.headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  headerText: {
    fontSize: 18,
    color: 'white'
  }
})