import React, { useState, useEffect } from 'react'
import { Button, Vibration } from 'react-native';
import styled from 'styled-components/native'
import { CustomButton } from './CustomButton';
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

export const AnswerWindow = ({question}) => {
  const[magicAnswer, setMagicAnswer] = useState('');
  const[isLoading, setIsLoading] = useState(true);
  const oneSecond = 1000;

  const handleButtonClick = () =>{
    window.location.reload();
  }

  useEffect(() => {
  const questionForBall = encodeURIComponent(question);
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const uri = "https://8ball.delegator.com/magic/JSON/" + questionForBall;
  const proxyMessage = proxyUrl + uri;
  fetch(proxyMessage)
    .then(response => response.json())
    .then(json => {
      console.log(json.magic.answer);
      setMagicAnswer(json.magic.answer);
      setIsLoading(false);
      vibrateDevice();
    });
  },[question]);

  
const vibrateDevice = () => {
  Vibration.vibrate();
}

  return(
      <AnswerContainer style={{backgroundColor: "purple"}}>
        <Container>
          <QuestionText>{question}</QuestionText>
        </Container>
       
        {magicAnswer === '' && isLoading && 
        <Spinner size="large" />}
       
        {magicAnswer !== '' && !isLoading && 
        <Container>
           <EightBall answer={magicAnswer}/>
        </Container>
       }
       
        <Container>
          <CustomButton text="I wanna ask a new question" onClick={handleButtonClick}/>
        </Container></AnswerContainer>
  )
}