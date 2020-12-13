import React, { useState } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native'

import { Entypo } from '@expo/vector-icons';

const ButtonCancel = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 50px;
  border-color: red;
  margin-top: 15px;
`;

const Input = styled.TextInput`
  height: 50px;
  width: 80%;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`;

const StyledView = styled.View`
  margin-top: 90px; 
  justify-content: center;
  align-items: center;
`;

const ButtonAdd = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 50px;
  border: green;
  margin-top: 15px;
`;

const IntentionInput = props => {
  const [enteredIntention, setEnteredIntention] = useState('');

  const intentionInputHandler = enteredText  => {  
    setEnteredIntention(enteredText);                  
  };

  const addIntentionHandler = () => {
    props.onAddIntention(enteredIntention);
    setEnteredIntention('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <StyledView >
        <Input
          placeholder="Daily Intentions"
          onChangeText={intentionInputHandler}
          value={enteredIntention}
        />
        <ButtonAdd title="ADD" onPress={addIntentionHandler}>
        <Entypo name="plus" size={24} color="#383E42" />
        </ButtonAdd>  
        <ButtonCancel titel="Cancel" onPress={props.onCancel}>   
        <Entypo name="cross" size={24} color="black" />
        </ButtonCancel>
      </StyledView>
    </Modal>
  );
};

export default IntentionInput;