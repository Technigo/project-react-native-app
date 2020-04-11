import React, { useState } from "react";
import { Text, View, Button, Alert, Vibration } from "react-native";
import { ActivitiesArray } from "./ActivitiesArray";
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native';
import { Lottie } from './Lottie';


export const Activity = () => {
  const [activity, setActivity] = useState()

  const getActivity = () => {
    const theActivity = ActivitiesArray[Math.floor(Math.random() * ActivitiesArray.length)]
    setActivity(theActivity)
  }

  const ActivityText = styled.Text`
  font-size: 43px;
  color: black;
  font-weight: bold;
  text-align: center;
  `

  const ViewContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`


  return (
    <ViewContainer>
      <TouchableOpacity title="Click for activity" onPress={() => {
        getActivity(); Vibration.vibrate()
      }}>
        <Lottie />
      </TouchableOpacity>
      <ActivityText>
        {activity}</ActivityText>
    </ViewContainer>
  )
}

