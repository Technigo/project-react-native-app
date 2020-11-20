import React, { useState } from 'react'


import styled from 'styled-components/native'

import { Entypo } from '@expo/vector-icons';

import backgroundImage from './assets/banana.png';
import { Text, View } from 'react-native';



const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`
const Input = styled.TextInput`
  height: 50px;
  width: 80%;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
`

const Title = styled.Text`
  font-size: 24px;
  color: #383E42;
  text-align: center;
  margin-bottom: 20px;
`

const ButtonAdd = styled.TouchableOpacity`
  background-color: #000;
  padding: 30px;
  border-radius: 30px;
  border: red;
  margin-top: 20px;
`

const App = () => {
  const [enteredIntention, setEnteredIntention] = useState('');
  const [dailyIntentions, setDailyIntentions] = useState([]);
    const intentionInputHandler = (enteredText)  => {  
      setEnteredIntention(enteredText);                      //value prop bound to entered intention so state updates with every input, and stores it in entered goal
    };

    const addIntentionHandler = () => {       //getting user input and storing it
      // console.log(enteredIntention);
      setDailyIntentions(currentIntentions => [...currentIntentions, enteredIntention]);       //takes existing intentions in old array adding intentions in new array
    }

  return (
    <Container source={backgroundImage}>
      <Title>Tiny react native app</Title>
    <Input 
    placeholder="Daily Intentions" 
    onChangeText={intentionInputHandler}
    value={enteredIntention}/>      
    {/* when button pressed add an entered intention           */}
    <ButtonAdd title="ADD" onPress={addIntentionHandler}/>  
    {/* create list of intentions from input    */}
    <View>
    {dailyIntentions.map((intention) => <Text>{intention}</Text>)}
    </View>
    </Container>
    
  )
}

export default App;