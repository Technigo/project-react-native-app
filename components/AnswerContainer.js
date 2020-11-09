import React, { useState, useEffect } from 'react'
import {  Vibration } from 'react-native';
import styled from 'styled-components/native'
import { EightBall } from './EightBall';
import { CustomButton } from './CustomButton';

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color: #dba9ff;
`;

const AnswerContainer = styled(Container)`
`;

const QuestionText = styled.Text`
font-size: 18px;
color: white;
`;

const Spinner = styled.ActivityIndicator`
`;

export const AnswerWindow = ({onReset}) => {
  const[magicAnswer, setMagicAnswer] = useState();
  const[isLoading, setIsLoading] = useState(true);

  const handleButtonClick = () =>{
    window.location.reload();
  }

  useEffect(() => {

  fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      setMagicAnswer(json.slip);
      setIsLoading(false);
      vibrateDevice();
    })
    .catch(error => console.log(error))
  //  return () => { unmounted = true };
  },[]);


const vibrateDevice = () => {
  Vibration.vibrate();
}

const resetTheApp = () => {
    onReset();
}

  return(
      <AnswerContainer>
      
        {magicAnswer === '' && isLoading && 
        <Spinner size="large" />}
       
        {magicAnswer !== '' && !isLoading && 
        <>
          <Container>
           <EightBall advice={magicAnswer.advice}/>
           <CustomButton onClick={resetTheApp} text="Thanks, take me back."/>
          </Container>
        </>
       }
       </AnswerContainer>
      
       
        
  )
}