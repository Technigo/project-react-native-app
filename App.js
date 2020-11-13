import React, { useState } from "react"
import { Pedometer } from "expo-sensors"
import styled from 'styled-components/native'

import { ShuffledQuotes } from './data/Quotes'
import { Animation } from './components/Animation'
import { Footer } from './components/Footer'


const Container = styled.View`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  background-color: #000;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const HeaderContainer = styled(Container)`
  flex: 1;
`

const StarWarsImg = styled.Image`
  flex: 1;
  width: 100%;
  margin-bottom: 30px;
`

const StepsContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
  margin-bottom: 35px;
`

const Info = styled.Text`
  font-size: 18px;
  margin: 8px;
  color: #F4F4F4;
  `

const MidContainer = styled(Container)`
  flex: 3;
  width: 100%;
`

const Speachbubble = styled(Container)`
  flex-wrap: wrap;
  width: 95%;
  background-color: #1B1B1C;
  border-radius: 50;
  padding: 17px;
  background-color: #F4F4F4
`

const LeaQuote = styled.Text`
  font-size: 17px;
  color: #000;
`

const Img = styled.Image`
  width: 300px;
  height: 170px;
  margin-top: 30px;
  margin-bottom: 30px;
  tintColor: #F4F4F4;
`

// implement shuffled quotes function by steps
// this has to be outside of App otherwise it's run constantly 
// and updates the quotes without contact to steps.
const quotes = ShuffledQuotes()

const App = () => {

  // creating the step counter with Pedometer
  const [stepCounter, setStepCounter] = useState(0)
  // this places a randomized quote in the speech bubble when opening
  // the app
  const [quote, setQuote] = useState(quotes[0])

  // at this nr of steps the quotes are suppose to update
  const stepsInterval = 30
  
  // the math.floor makes th quotes into numbers
  // and then it's the result divided by the stepsInterval
  // together with quotes this then generates a random 
  // quote from list
  Pedometer.watchStepCount(result => {
    setStepCounter(result.steps)
    setQuote(quotes[Math.floor(result.steps/stepsInterval)])
  })

  return (
    <Container>
      <HeaderContainer>
        <StarWarsImg source={require('./assets/CFQ.png')} />
      </HeaderContainer>
      <StepsContainer>
        <Info> You have walked: {stepCounter}</Info>
        <Animation />
      </StepsContainer>
      <MidContainer>
        <Speachbubble>
          <LeaQuote>
            {quote}
          </LeaQuote>
        </Speachbubble>
        <Img source={require('./assets/PL.png')} />
      </MidContainer>
      <Footer />
    </Container>
  )
}

export default App