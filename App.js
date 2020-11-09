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
  color: palevioletred;
`;

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
  <QuestionContainer style={{backgroundColor: "#fff"}}>
     <Title>Heyo!</Title>
        <Title>Ask me a question</Title>
        <UserInput onChange={handleInputChange}/>
        {!questionIsValid && questionValidated && <InfoText>Check your input, enter only letters and at least 4.</InfoText>}
        {questionIsValid && <CustomButton onClick={handleButtonClick} text="Let's go"/> }
        <Title>🎱🎱🎱</Title>
    </QuestionContainer>
  }
   {showAnswers && 
   <AnswerWindow question={userQuestion} />
   }
    </>
  )
}

export default App
