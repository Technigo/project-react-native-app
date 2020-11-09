import React, { useState , useEffect} from 'react'
import styled from 'styled-components/native'

import { UserInput } from './components/UserInput';
import { ConfirmButton, CustomButton } from './components/CustomButton';
import { AnswerWindow } from './components/AnswerContainer'
import { ShakeEvent} from './components/ShakeEvent';

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
font-size: 18px;
font-weight: bold`;

const InfoText = styled.Text`
font-size: 14px;
color: orange;
`;



const App = () => {
  const[userQuestion, setUserQuestion] = useState('');
  const[questionIsValid, setQuestionIsValid] = useState(false);
  const [questionValidated, setQuestionValidated] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const shakePhone = () => {
    setShowAnswers(true);
  }

  useEffect(() => {
    ShakeEvent.addListener(() => {
      shakePhone();
    })

    return () => {
      ShakeEvent.removeListener();
    }
  }, []);


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
     <Title>Random advice of the day 💡</Title>
       
    <CustomButton onClick={handleButtonClick} text="Let's go"/>
    <SmallText>👋 Or simply shake your device to get what you need! 👋</SmallText> 
        <Title></Title>
    </QuestionContainer>
  }
   {showAnswers && 
   <AnswerWindow />
   }
    </>
  )
}

export default App
