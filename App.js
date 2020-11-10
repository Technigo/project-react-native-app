import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styled from 'styled-components/native'

import { View, Text, TouchableOpacity, Button } from 'react-native'

import { StartScreen } from './Components/StartScreen'
import { Challenges } from './Components/Challenges'
import { ChallengeButton } from './Components/Button'


import { ShareScreen } from './components/ShareScreen';
import { HomeScreen } from './components/HomeScreen';

import challenges from'./Components/Data/challenges.json'


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`


const ResultText = styled.Text`
  padding:20px;
  font-size:20px;
`
const Tab = createMaterialTopTabNavigator();

const App = () => {
  const [challenge, setChallenge] = useState('');
  const onClick = (event) => {
    event.preventDefault()
      setChallenge(challengeArray)
      console.log(challenge)
  }
  
  let challengeArray = 
  [
   'Do not apologize today!',
   'Be bold! take place in meeting!', 
   'Do not offer to do meaningless shores!',
   'Practice saying NO!', 
  ]


  const random = Math.floor(Math.random() * challengeArray.length);
  console.log(random, challengeArray[random]);


  return (
   
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Share" component={StartScreen} />
      </Tab.Navigator>
   
      

    <Container>
    
    <StartScreen/>   

    <Button
      onPress={onClick}
      title="Change Challenge"
      color="blue">
    </Button>
    <ResultText>{random, challengeArray[random]}</ResultText>

    <Challenges />
    <ChallengeButton />
     
    </Container>

    </NavigationContainer>
  
  )
}

export default App
