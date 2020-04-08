import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Nasa } from './components/Nasa'
import styled from 'styled-components/native'
import { Tap } from './components/Tap'
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
background-color: #ffe8ea;
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
