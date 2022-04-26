import React, { useState } from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import styled from 'styled-components/native'


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
	justify-content: center;
	align-items: center;
  padding: 0 30px;
`

const Title = styled.Text`
	font-size: 24px;
	color: gray;
`

const BigTitle = styled.Text`
	font-size: 60px;
  font-family: 'Cochin';
	color: tomato;
  text-align: center;
`

const Home = () => {

  return (
    <Container>
      <Title>Welcome to the</Title>
      <BigTitle>Cat Randomizer</BigTitle>
    </Container>
  )
}

export default Home
