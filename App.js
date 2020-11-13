import React, { useState , useEffect} from 'react'
import styled from 'styled-components/native'

import { CustomButton } from './components/CustomButton';
import { AnswerWindow } from './components/AnswerWindow'
import { ShakeEvent} from './components/ShakeEvent';

const QuestionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: pink;`;

const Title = styled.Text`
  font-size: 40px;
  color: #00106b;
  padding: 20px;
  font-weight: bold;
`;

const SmallText = styled(Title)`
font-size: 18px;
font-weight: bold`;

const App = () => {
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

/*
  const handleInputChange = (valueFromInput, isValid, isValidated) =>{
    setUserQuestion(valueFromInput);
    setQuestionIsValid(isValid);
    setQuestionValidated(true);
  }
*/
  const handleButtonClick = () =>{
    setShowAnswers(true);
  }

  const resetApp = () =>{
    setShowAnswers(false);
  }

  return (<>
  {!showAnswers && 
  <QuestionContainer>
     <Title>Advice of the day 💡</Title>
       
    <CustomButton onClick={handleButtonClick} text="Press for advice"/>
    <SmallText>👋 Or simply shake your device to get what you need!</SmallText> 
       
    </QuestionContainer>
    
  }
   {showAnswers && 
   <AnswerWindow onReset={resetApp}/>
   }
    </>
  )
}

export default App
