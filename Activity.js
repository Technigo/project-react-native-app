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
  justify-content: flex-start;
  align-items: center;
  background-color: #d0f2dc;
  `

  const InterTitle = styled.Text`
  font-size: 42;
  font-family: 'Inter-Black';
  text-align: center;
  letter-spacing: -1.5;
  margin-top: 30;
  color: #8dc1a9;
  margin-bottom: 5;
  `

  const InterText = styled.Text`
  font-size: 15;
  color: black;
  text-align: center;
  margin-left: 54;
  margin-right: 54;
  margin-bottom: 20;
  `

  const ActivateTitle = styled.Text`
  font-size: 19px;
  color: #8dc1a9;
  margin-bottom: 30;
  margin-top: 40;
  font-family: 'Inter-Black';
  text-align: center;
  letter-spacing: -0.5;
  `

  if (!fontLoaded) {
    return <AppLoading />
  } else {

    return (
      <Container>
        <InterTitle>Stuck at home?</InterTitle>
        <InterText>Take this time to contemplate. Or do something useful at home. You'll see that the more you do during this quarantine, the more time works for us, the closer we get to the quarantine-free time!</InterText>
        <TouchableOpacity title="Click for activity" onPress={() => {
          getActivity(); Vibration.vibrate(); navigation.navigate('ActivityPage', { activity })
        }}>
          <Lottie />
        </TouchableOpacity>
        <ActivateTitle>CLICK TO ACTIVATE ME!</ActivateTitle>
      </Container>
    )
  }
}
