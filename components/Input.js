import React, { useState } from 'react'


import styled from 'styled-components/native'
// import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import backgroundImage from './assets/banana.png';



const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`

const Title = styled.Text`
  font-size: 24px;
  color: #383E42;
  text-align: center;
  margin-bottom: 20px;
`


const ButtonAdd = styled.TouchableOpacity`
  background-color: #fff;
  padding: 20px;
  border-radius: 30px;
  border: red;
  margin-top: 20px;
  color: #383E42;
`



const TextInput = styled.TextInput`
  height: 60px;
  font-size: 18px;
  border: 1px solid black;
  border-radius: 5px;
  display: block;
  margin: 0 0 1em;
  padding: 10px
  `


const App = () => {


  return (
    <Container source={backgroundImage}>
    <Title>Tiny react native app</Title>
      <TextInput placeholder="Course Goal" />
    <ButtonAdd title="ADD" />
    </Container>
    
  )
}

export default App;