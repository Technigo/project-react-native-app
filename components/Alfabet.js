import React from 'react'
import { useState } from 'react'
import { View, Vibration } from 'react-native'

import styled from 'styled-components/native'

const TouchButton = styled.TouchableOpacity`
  padding: 25px;
  margin: 0px;
  width: 250px;
  borderRadius: 25px;
  backgroundColor: #411271;
  border: 4px #01AA31; 
`; 
const ButtonText = styled.Text`
  textAlign: center;
  fontSize: 20px;
  justify-content: center;
  alignItems: center;
  color: #F5C603;
`;
const Letter = styled.Text`
  fontSize: 204px;
  marginBottom: 50px;
  color: #F5C603;
  textAlign: center;
  justifyContent: center;
  alignItems: center;
`;
const Emoji = styled.Text`
  fontSize: 104px;
  textAlign: center;
  justifyContent: center;
  alignItems: center;
`;

export const Alfabet = ({ letterArray }) => {

  const [letter, setLetter] = useState("")
  const [emoji, setEmoji] = useState("🤹‍♀️")
  
  const getLetter = () => {
    const theLetter = letterArray[Math.floor(Math.random() * letterArray.length)]
    setLetter(theLetter.letter)
    setEmoji(theLetter.emoji)
  }
  return (
    <View>
        <Emoji>
          {emoji}
        </Emoji>
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

