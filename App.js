import React from 'react'
import styled from 'styled-components/native'

import { StepCounter } from './components/StepCounter'
import { Animation } from './components/Animation'
import { ShuffledQuotes } from './data/Quotes'
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

const App = () => {
  // implement shuffled quotes function by steps
  const quotes = ShuffledQuotes()
  const steps = StepCounter()

  if (steps === 20) (
    quotes[1]
  )

  return (
    <Container>
      <HeaderContainer>
        <StarWarsImg source={require('./assets/CFQ.png')} />
      </HeaderContainer>
      <StepsContainer>
        <Info> You have walked:</Info>
        <StepCounter />
        <Animation />
      </StepsContainer>
      <MidContainer>
        <Speachbubble>
          <LeaQuote>
            {quotes[10]}
          </LeaQuote>
        </Speachbubble>
        <Img source={require('./assets/PL.png')} />
      </MidContainer>
      <Footer />
    </Container>
  )
}

export default App