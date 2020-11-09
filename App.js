import React, { useState } from 'react'
import styled from 'styled-components/native'

import { UserInput } from './components/UserInput';
import { ConfirmButton, CustomButton } from './components/CustomButton';
import { AnswerWindow } from './components/AnswerContainer'

const QuestionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: black;
`;

const SmallText = styled(Title)`
font-size: 14px`;

const InfoText = styled.Text`
font-size: 14px;
color: orange;
`;



const App = () => {
  const[userQuestion, setUserQuestion] = useState('');
  const[questionIsValid, setQuestionIsValid] = useState(false);
  const [questionValidated, setQuestionValidated] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleInputChange = (valueFromInput, isValid, isValidated) =>{
    setUserQuestion(valueFromInput);
    setQuestionIsValid(isValid);
    setQuestionValidated(true);
  }

  const handleButtonClick = () =>{
    setShowAnswers(true);
  }

  return (<>
  {!showAnswers && 
  <QuestionContainer>
     <Title>In need of advice?</Title>
       
       {/*  <Title>Ask me a question</Title><UserInput onChange={handleInputChange}/>
        {!questionIsValid && questionValidated && <InfoText>Check your input, enter only letters and at least 4.</InfoText>}*/}
       
    <CustomButton onClick={handleButtonClick} text="Get some advice"/>
    <SmallText>Or shake your device to awaken the advice-gnomes</SmallText> 
        <Title>🎱🎱🎱</Title>
    </QuestionContainer>
  }
   {showAnswers && 
   <AnswerWindow />
   }
    </>
  )
}

export default App
