import React from 'react'
import styled from 'styled-components/native'

import { useState } from 'react'
import { View, Vibration } from 'react-native'



const TouchButton = styled.TouchableOpacity`
  padding: 25px;
  margin: 0px;
  width: 250px;
  border-radius: 25px;
  background-color: #411271;
  border: 4px #01AA31; 
`; 
const ButtonText = styled.Text`
  text-align: center;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  color: #F5C603;
`;
const Letter = styled.Text`
  font-size: 204px;
  margin-bottom: 50px;
  color: #F5C603;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
const Emoji = styled.Text`
  font-size: 104px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Alfabet = ({ letterArray }) => {

  const [letter, setLetter] = useState("")
  const [emoji, setEmoji] = useState("🤹‍♀️")
  
  const getLetter = () => {
    const theLetter = letterArray[Math.floor(Math.random() * letterArray.length)]
    setLetter(theLetter.letter)
    setEmoji(theLetter.emoji)
  }
  
  const vibrationButton = () => {
    getLetter();
    Vibration.vibrate();
  }

  return (
    <View>
        <Emoji>
          {emoji}
        </Emoji>
        <Letter>
          {letter}
        </Letter>  
        <TouchButton onPress={vibrationButton}>
          <ButtonText>Herthas ABC</ButtonText>
        </TouchButton>
    </View>
  )
};

