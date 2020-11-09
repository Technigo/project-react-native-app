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

  return(
      <AnswerContainer style={{backgroundColor: "purple"}}>
      
        {magicAnswer === '' && isLoading && 
        <Spinner size="large" />}
       
        {magicAnswer !== '' && !isLoading && 
        <>
          <Container>
           <EightBall advice={magicAnswer.advice}/>
          </Container>
        </>
       }
       </AnswerContainer>
      
       
        
  )
}