import React, { useState, useEffect } from 'react'
import {  Vibration } from 'react-native';
import styled from 'styled-components/native'
import { EightBall } from './EightBall';


const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const AnswerContainer = styled(Container)`
`;

const QuestionText = styled.Text`
font-size: 18px;
color: white;
`;

const Spinner = styled.ActivityIndicator`
`;

export const AnswerWindow = ({}) => {
  const[magicAnswer, setMagicAnswer] = useState('');
  const[isLoading, setIsLoading] = useState(true);
  const oneSecond = 1000;

  const handleButtonClick = () =>{
    window.location.reload();
  }

  useEffect(() => {
  /*const questionForBall = encodeURIComponent(question);
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const uri = "https://8ball.delegator.com/magic/JSON/" + questionForBall;
  const proxyMessage = proxyUrl + uri;*/

  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setMagicAnswer(json.slip.advice);
      setIsLoading(false);
      vibrateDevice();
    })
    .catch(error => console.log(error))
    return () => { unmounted = true };
  },[]);


const vibrateDevice = () => {
  Vibration.vibrate();
}

  return(
      <AnswerContainer style={{backgroundColor: "purple"}}>{/*  <Container>
        <QuestionText>Here is the advice for today</QuestionText>
      </Container>
      */}
      
       
        {magicAnswer === '' && isLoading && 
        <Spinner size="large" />}
       
        {magicAnswer !== '' && !isLoading && 
        <>
          <Container>
           <EightBall answer={magicAnswer}/>
          </Container>
        </>
       }
       </AnswerContainer>
      
       
        
  )
}