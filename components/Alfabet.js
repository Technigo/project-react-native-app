import React from 'react'
import { useState } from 'react'
import { Text, View, TouchableOpacity, Vibration } from 'react-native'
import styled from 'styled-components/native'

const TouchButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 0px;
  width: 200px;
  borderRadius: 25px;
  border: 4px solid #01AA31; 
`; 
const ButtonText = styled.Text`
  textAlign: center;
  fontSize: 16px;
  justify-content: center;
  alignItems: center;
  color: #01AA31;
`;
const Letter = styled.Text`
  fontSize: 154px;
  color: #F5C603;
  textAlign: center;
  justifyContent: center;
  alignItems: center;
`;

export const Alfabet = ({ letterArray }) => {

  const [letter, setLetter] = useState([])
  
  const getLetter = () => {
    const theLetter = letterArray[Math.floor(Math.random() * letterArray.length)]
    setLetter(theLetter.letter)
  }
  return (
    <View>
        <Letter>
          {letter}
        </Letter>
        <TouchButton onPress={() => { 
        getLetter(); Vibration.vibrate()}}>
          <ButtonText>Herthas ABC</ButtonText>
        </TouchButton>
    </View>
  )
};

