import React, { useState } from 'react'
import styled from 'styled-components/native'
// import {TouchableOpacity } from 'react-native'
import { Text, Image } from 'react-native'

import { Header } from './components/Header'
import { ShuffledQuotes } from './data/Quotes'
import { Footer } from './components/Footer'
// import { LeiaIcon } from './components/LeiaIcon'



const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const MidContainer = styled(Container)`
  flex: 3
  width: 100%
  background-color: #fff
`

const Speachbubble = styled(Container)`
  width: 80%
  background-color: #70706e
`
// word-break: break-word or similar?
const LeaQuote = styled.Text`
font-size: 20px
`

const Img = styled.Image`
  width: 300px;
  height: 170px;
  margin-top: 30px
  margin-bottom: 30px
`

const App = () => {
  // implement shuffled quotes function
  const quotes = ShuffledQuotes()
  return (
    <Container>
      <Header />
      <MidContainer>
        <Speachbubble>
          <LeaQuote>
          {quotes[10]}
        </LeaQuote>
        </Speachbubble>
        {/* <LeiaIcon /> */}
        {/* <Img source={require('./assets/Leia.png')} /> */}
        <Img source={require('./assets/PL.png')} />
      </MidContainer>
      <Footer />
    </Container>
  )
}

export default App

