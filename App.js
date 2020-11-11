import React, { useState } from 'react'
import styled from 'styled-components/native'
// import Balloon from "react-native-balloon";
// import {TouchableOpacity } from 'react-native'
import { Text, Image } from 'react-native'

// import { Header } from './components/Header'
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
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
  margin-bottom: 35px;
`

const Info = styled.Text`
  font-size: 18px;
  margin: 8px;
  color: #000;
  `

const MidContainer = styled(Container)`
  flex: 3;
  width: 100%;
  background-color: #fff;
`

const Speachbubble = styled(Container)`
  flex-wrap: wrap;
  width: 95%;
  background-color: #1B1B1C;
  border-radius: 50;
  padding: 17px;
  text-align: center;
`

const LeaQuote = styled.Text`
font-size: 17px;
color: #DCDCDC
text-align: center;
`

const Img = styled.Image`
  width: 300px;
  height: 170px;
  margin-top: 30px
  margin-bottom: 30px
`
const TestContainer = styled.View`
flex: 1
width: 100%
justify-content: center
align-items: center
margin-top: 0
background-color: #fff
`

const Test = styled.Image`
flex: 1
width: 100%
padding: 50px
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
      <TestContainer>
      <Test source={require('./assets/CFQ.png')}/>
      </TestContainer>
      {/* <Header /> */}
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