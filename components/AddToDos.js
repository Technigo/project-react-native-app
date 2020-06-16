import React, { useState } from 'react'
import styled from 'styled-components/native'

const Container = styled.View `
  margin: 10px;
  padding: 10px;
`
const Input = styled.TextInput `
font-size: 24px;
padding: 16px;
marginTop: 16px;
borderColor: grey;
background-color: white;
borderWidth: 1px;
borderRadius: 10px;
text-align: center;
`
const AddButton = styled.TouchableOpacity `
font-size: 24px;
padding: 16px;
marginTop: 16px;
borderColor: grey;
background-color: white;
borderWidth: 1px;
borderRadius: 10px;
`
const Title = styled.Text `
  font-size: 24px;
  text-align: center;
`

export const AddToDos = ({ submitHandler }) => {
  const [ text, setText ] = useState('');

  const changeText = (value) => {
    setText(value)  
  };


  return (
    <Container>
      <Input 
        placeholder='What to do...'
        type="text"
        onChangeText={changeText}
        value={text} />
      
      <AddButton
        onPress={() => submitHandler(text)} >
        <Title>ADD</Title>
      </AddButton>
    </Container>
  );
};
