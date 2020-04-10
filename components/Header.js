import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{ props.title } </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#655c56',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#effcef',
    fontWeight: '900',
    textTransform: 'uppercase',
  }
})


export default Header