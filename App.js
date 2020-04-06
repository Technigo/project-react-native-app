import React from 'react'
import Constants from 'expo-constants';

import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from './globalstyles';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F4F7FF',
    paddingTop: Constants.statusBarHeight,
    padding: 20,
  },
  title: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  }
})


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.base, styles.title]}>Todo today</Text>
    </View>
  )
}

export default App
