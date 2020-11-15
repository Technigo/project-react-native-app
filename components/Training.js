import React from 'react'
import { useState } from 'react'
import { View, Vibration } from 'react-native'
import styled from 'styled-components/native'

const TouchButton = styled.TouchableOpacity`
  alignSelf: center;
  alignItems: center;
  justifyContent: center;
  padding: 10px;
  marginBottom: 0px;
  width: 160px;
  borderRadius: 15px;
  backgroundColor: #ff8300;
  border: 2px #ff8300;
`
const ButtonText = styled.Text`
  textAlign: center;
  fontSize: 20px;
  fontWeight: bold;
  justify-content: center;
  alignItems: center;
  color: #ffad57;
`
const Title = styled.Text`
  width: 300px;
  fontSize: 45px;
  margin: 25px;
  marginBottom: 100px;
  color: #ff8300;
  fontWeight: bold;
  textAlign: center;
  justifyContent: center;
  alignItems: center;
`

export const Training = ({activitiesArray}) => {

  const [activity, setActivity] = useState("")

  const getActivity = () => {
    const theActivity = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]
    setActivity(theActivity.activity)
  }

  return (
    <View>
      <Title>
        {activity}
      </Title>
      <TouchButton onPress={() => {
      getActivity(); 
      Vibration.vibrate();}}>
        <ButtonText>Vad ska jag träna idag?</ButtonText>
      </TouchButton>
    </View>
  )
};