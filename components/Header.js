import Constants from 'expo-constants'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../globalstyles'

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
})

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={[globalStyles.base, styles.title]}>Todo today</Text>
    </View>
  )
}
