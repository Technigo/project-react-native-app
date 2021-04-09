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
  background-color: #000;
`;

const BaseText = styled.Text`
  color: white;
  font-family: 'Courier New';
`;

const Title = styled(BaseText)`
  flex: 0.20;
  align-items: center;
  font-size: 40px;
  padding: 0px;
  margin: 35px 15px 10px 15px;
`;

const TodayText = styled(BaseText)`
  font-size: 20px;
`;

//these don't get applied for some reason :((
const IncrementButton = styled.TouchableOpacity`
  margin: 10px 15px 5px 15px;
  padding: 15px 25px;
  border: 2px solid #fff;
  border-radius: 15px;
`;

const ButtonLabel = styled(BaseText)`
  font-size: 32px;
`;

const Explanation = styled(BaseText)`
    font-size: 14px;
    margin: 10px 30px 30px 30px;
    text-align: center;
    color: grey;
`;

const Footer = styled(BaseText)`
  font-size: 12px;
  padding-bottom: 30px;
  margin: 15px 80px 15px 80px;
  text-align: center;
`;

const Linky = styled(BaseText)`
  color: #2ca3e8;
`;



const App = () => {

  const [steps, setSteps] = useState(22)
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

        <TodayText>Quote of the Day</TodayText>

        <QuoteHandler 
          shown={currentQuote.shown}
          onCurrentQuoteChange={onCurrentQuoteChange}
          currentQuote={currentQuote}
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
          <ButtonLabel>reveal</ButtonLabel>
        </IncrementButton>

        <Explanation>A hundred steps for<br></br>a word of wisdom</Explanation>

        <Footer>Inspirational quotes provided by <Linky onPress={() => {Linking.openURL("https://zenquotes.io/")}}>ZenQuotes API</Linky></Footer>
      </AppWrapper>
  );
};

export default App;
