import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const Detail = () => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=qSlGOjPnCXc7pgWt5QcdsI3nw45FfocwP6EggaOZ')
      .then((res) => res.json())
      .then((json) => setInfo(json))
  }, [])

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Container>
          <Date>{info.explanation}</Date>
        </Container >
      </ScrollView>
    </SafeAreaView>

  )
}

const Container = styled.View`
  flex:1;
  background-color: #222;
  justify-content: center;
  align-items: center;
  paddingHorizontal: 10;
  paddingVertical: 10;
`
const Date = styled.Text`
  font-size: 24px;
  color: violet;
  paddingHorizontal: 0;
  paddingVertical: 0;
`
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    paddingHorizontal: 10,
    backgroundColor: '#222',
  },
  text: {
    fontSize: 42,
    paddingHorizontal: 10,
    color: '#fff',
  }
})