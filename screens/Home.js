import React, { useState } from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import styled from 'styled-components/native'
import { useFonts, Sacramento } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

// This is the main container for this screen
// const FeedContainer = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `

const Container = styled.View`
	flex: 1;
	/* background-color: papayawhip; */
	justify-content: space-around;
	align-items: center;
  padding: 0 30px;
  background-color: tomato;
`

const Title = styled.Text`
	font-size: 24px;
	color: gray;
`

const BigTitle = styled.Text`
	font-size: 60px;
  font-family: 'Sacramento';
	color: white;
  text-align: center;
`

const Home = () => {
  let [fontsLoaded] = useFonts({
    'Sacramento': require('../assets/Sacramento-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Title>Welcome to the</Title>
      <View>
      <BigTitle>Cat</BigTitle>
      <BigTitle>Randomizer</BigTitle>
      </View>
      <Title>Choose a screen</Title>

    </Container>
  )
}

export default Home
