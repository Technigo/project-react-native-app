import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Text, View, Vibration, TouchableOpacity, Animated } from 'react-native';

const PeppView = styled.View`
  flex-direction: row;
`
const PeppContainer = styled.View`
  height: 80;
  width: 150;
  align-items: center;
  justify-content: center;
  background: #466687;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 2px;
`

const PeppText = styled.Text`
  text-align: center;
  color: white;
`

const PeppButton = styled.TouchableOpacity`
  height: 100;
  width: 100;
  border-radius: 50;
  border: 2px solid #466687;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 3px;

`
const ButtonText = styled.Text`
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #466687;
  padding: 17px;
`

export const PeppTalk = () => {

  const PeppTalkArray = ["Go Go Go", "Do it baby!", "You are strong", "Strong is the new black", "You are great!"]
  const [pepptalk, setPepptalk] = useState([])

  const getPepptalk = () => {
    const thePepptalk = PeppTalkArray[Math.floor(Math.random() * PeppTalkArray.length)]
    setPepptalk(thePepptalk)
  }

  return (
    <PeppView>
      <PeppContainer>
        <PeppText>
          {pepptalk}
        </PeppText>
      </PeppContainer>
      <PeppButton onPress={() => { getPepptalk(); Vibration.vibrate() }}>
        <ButtonText>Pep talk to me</ButtonText>
      </PeppButton>
    </PeppView>
  )
}
