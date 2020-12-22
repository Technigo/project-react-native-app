import React, { useState } from 'react'
import { View, Vibration } from 'react-native'
import styled from 'styled-components/native'

const TouchButton = styled.TouchableOpacity`
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-bottom: 0px;
  width: 160px;
  border-radius: 15px;
  background-color: #ff8300;
  border: 2px #ff8300;
`
const ButtonText = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: #ffad57;
`
const Title = styled.Text`
  width: 310px;
  font-size: 45px;
  margin: 25px;
  margin-bottom: 100px;
  color: #ff8300;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const Training = ({activitiesArray}) => {

  const [activity, setActivity] = useState("")

  const getActivity = () => {
    const theActivity = activitiesArray[Math.floor(Math.random() * activitiesArray.length)]
    setActivity(theActivity.activity)
  }

  const myFunction = () => {
    getActivity()
    Vibration.vibrate()
  }

  return (
    <View>
      <Title>
        {activity}
      </Title>
      <TouchButton onPress={myFunction}>
        <ButtonText>Vad ska jag träna idag?</ButtonText>
      </TouchButton>
    </View>
  )
};