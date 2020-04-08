import React from 'react'
import { Nasa } from './components/Nasa'
import styled from 'styled-components/native'
import { Tap } from './components/Tap'
import { Detail } from './components/Detail'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const App = () => {

  return (

    <Container>
     <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>New picture from NASA everyday!</Text>
      <Nasa></Nasa>
      <Tap></Tap>
      </ScrollView>
    </SafeAreaView>
    </Container>
  )
}

export default App

const Container = styled.View`
flex:1;
justify-content: center;
align-items: center;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
});
