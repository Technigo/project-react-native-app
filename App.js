import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ApiFetch from './components/ApiFetch'

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>A clever quote on your coding journey</Text>
        <View style={styles.quoteContainer}>
          <ApiFetch />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 100
  },
  title: {
    fontSize: 16,
    color: 'palevioletred',
    alignItems: 'center',
    marginLeft: 30,
    fontFamily: 'Optima-Bold'
  },
  quoteContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 40
  },
  scrollView: {
    marginHorizontal: 20
  }
})

export default App
