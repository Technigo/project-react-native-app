import React, { useState } from 'react'
import styled from 'styled-components/native'
// import {TouchableOpacity } from 'react-native'
import { Text, Image } from 'react-native'

import { Header } from './components/Header'
import { StepCounter } from './components/StepCounter'
import { ShuffledQuotes } from './data/Quotes'
import { Footer } from './components/Footer'



const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const StepsContainer = styled.View`
  width: 100%
  background-color: #fcba03
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
  margin-bottom: 20px;
`

const Info = styled.Text`
  font-size: 18px;
  margin: 8px;
  color: #000;
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
color: #fff
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

  const steps = StepCounter()

  if (steps === 10) (
    quotes[3]
  )

  return (
    <Container>
      <Header />
      <StepsContainer>
        <Info> You have walked:</Info>
        <StepCounter />
      </StepsContainer>
      <MidContainer>
        <Speachbubble>
          <LeaQuote>
          {quotes[10]}
        </LeaQuote>
        </Speachbubble>
        {/* <Img source={require('./assets/Leia.png')} /> */}
        <Img source={require('./assets/PL.png')} />
      </MidContainer>
      <Footer />
    </Container>
  )
}

export default App