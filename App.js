import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import * as Linking from 'expo-linking';

import { SensorComponent } from './components/SensorComponent';
import QuoteHandler from './components/QuoteHandler'
import StepCounter from './components/StepCounter'
import { Button, TouchableOpacity } from 'react-native';

const AppWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #574334;
`;

const Title = styled.Text`
  flex: 0.5;
  font-size: 48px;
  color: white;
`;

//these don't get applied for some reason :((
const IncrementButton = styled.TouchableOpacity`
  flex: 1;
  margin: 15px;
  padding: 15px 25px;
  border-radius: 15px;
  color: black;
  background-color: #5b2466;
`;

const ButtonLabel = styled.Text`
  font-size: 32px;
  color: white;
`;

const Footer = styled.Text`
  font-size: 12px;
  color: palevioletred;
  padding-bottom: 30px;
`;

const Linky = styled.Text`
  color: #2ca3e8;
`;



const App = () => {

  const [steps, setSteps] = useState(10)
  const [stepCooldown, setStepCooldown] = useState(false)
  const [currentQuote, setCurrentQuote] = useState({text: "", name: "", length: 0, shown: 0})
  const [revealHeld, setRevealHeld] = useState(false)
  const [timer, setTimer] = useState(null)

  const onStep = () => {
    setSteps(steps+1)
    setStepCooldown(stepCooldown)
  };

  const onCurrentQuoteChange = (quote) => {
    setCurrentQuote(quote)
  };

  const reveal = (spent) => {
    
    if (steps >= 0 + spent) {
      setCurrentQuote({text: currentQuote.text, name: currentQuote.name, length: currentQuote.length, shown: currentQuote.shown + spent})
      setSteps(steps - spent)

    } else if (spent - steps > 0) {
      const cantAfford = spent - steps
      console.log(`cantAfford: ${cantAfford}`)
      console.log(`spent - cantAfford: ${spent - cantAfford}`)
      setCurrentQuote({text: currentQuote.text, name: currentQuote.name, length: currentQuote.length, shown: currentQuote.shown + (spent - cantAfford)})
      setSteps(steps - (spent - cantAfford))
    }

    /*https://medium.com/@pavolfulop/repeat-onpress-action-when-holding-button-react-native-2c697cf28032*/
                  //onPressIn={() => {while(steps > 0) {setTimeout(startReveal)}}}
    //https://docs.expo.io/versions/latest/sdk/pedometer/ 
  };

  const startReveal = () => {
    console.log("reveal START")
    if (steps > 0 && revealHeld) {
      setCurrentQuote({text: currentQuote.text, name: currentQuote.name, length: currentQuote.length, shown: currentQuote.shown + 1})
      setSteps(steps - 1)
      
    } //so the issue is that the onPressOut can never be triggered because the program is stuck in a loop
    setTimer(setTimeout(startReveal, 500))
  };

  const stopReveal = () => {
    setRevealHeld(false)
    setTimer(clearTimeout(timer))
  };

  //how does onCurrentQuoteChange fit in with incrementation? Is it obsolete now??


  return (
      <AppWrapper>
        
        <Title>Zen Walker</Title>

        <QuoteHandler 
          shown={currentQuote.shown}
          onCurrentQuoteChange={onCurrentQuoteChange}
          startReveal={startReveal}
        />

        <StepCounter 
          steps={steps} 
          onStep={onStep} 
          stepCooldown={stepCooldown}
        />

        <IncrementButton
          onPress={() => {reveal(1)}}
        >
          <ButtonLabel>Reveal!</ButtonLabel>
        </IncrementButton>

        <Footer> Quotes provided by <Linky onPress={() => {Linking.openURL("https://zenquotes.io/")}}>ZenQuotes</Linky></Footer>
      </AppWrapper>
  );
};

export default App;
