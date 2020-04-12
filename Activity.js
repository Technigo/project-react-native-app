import React, { useState } from "react";
import { Text, View, Button, Alert, Vibration } from "react-native";
import { ActivitiesArray } from "./ActivitiesArray";
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Lottie } from './Lottie';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';



export const Activity = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  })
  const [activity, setActivity] = useState()

  const getActivity = () => {
    const theActivity = ActivitiesArray[Math.floor(Math.random() * ActivitiesArray.length)]
    setActivity(theActivity)
  }

  const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: #d0f2dc;
  `
  const InterTitle = styled.Text`
  font-size: 40;
  font-weight: bold;
  color: #8dc1a9;
  font-family: 'Inter-Black';
  text-align: center;
  margin-bottom: 60;
  `
  const ActivateTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #8dc1a9;
  margin-bottom: 60;
  margin-top: 70;
  font-family: 'Inter-Black';
  text-align: center;
  `

  if (!fontLoaded) {
    return <AppLoading />
  } else {

    return (
      <Container>
        <InterTitle>Stuck at home?</InterTitle>
        <TouchableOpacity title="Click for activity" onPress={() => {
          getActivity(); Vibration.vibrate(); navigation.navigate('ActivityPage', { activity })
        }}>
          <Lottie />
        </TouchableOpacity>
        <ActivateTitle>Click to activate me!</ActivateTitle>
      </Container>
    )
  }
}
