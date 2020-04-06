import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../globalstyles'

const styles = StyleSheet.create({
  header: {
    paddingTop: 80,
    padding: 40,
    backgroundColor: '#004445',
  },
  title: {
    color: '#fff',
    fontSize: 24,
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
