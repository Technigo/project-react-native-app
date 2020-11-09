import React, {useState} from 'react'
import styled from 'styled-components/native'

const InputField = styled.TextInput`
    font-size: 18px;
    border: 1px solid black;
    height: 50px;
    width: 250px;
    margin: 10px;
`;


export const UserInput = ({onChange}) =>{
  const[question, setQuestion] = useState('');
  const[isValid, setIsValid] = useState(false);
  const[isValidated, setIsValidated] = useState(false);

  const handleInputChange = (newValue) =>{
    setQuestion(newValue);
    validateInput(question);
    onChange(newValue,isValid,isValidated);
  }

const validateInput = (value) => {
  const pattern = (/^[A-Za-z? ]+$/)
  if (value !== '' && pattern.test(value)) {
    setIsValidated(true);
    setIsValid(true);
  } else {
    setIsValidated(true);
    setIsValid(false);
  }
}
  return (
    <InputField 
    value={question}
    onChange={(event) => handleInputChange(event.target.value)}
   >
    </InputField>
  )
}
