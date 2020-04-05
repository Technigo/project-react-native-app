//import React, { useState} from "react"
import React from 'react'
import Header from './Header';
import MagicBall from './MagicBall';
import styled from 'styled-components/native'
import { StyleSheet } from "react-native";

 const App = () => {

  return (
    <Container>

        <Header title="MAGIC 8 BALL" /> 

        <View>

        <MagicBall/>

        </View>
      
    </Container>
  )

}

const Container = styled.View`
  flex: 1;
  background-color: #8CFFBA;
  justify-content: center;
  align-items: center;
`
const View = styled.View`
  height: 210; 
  width: 210; 
  background-color: #000000;
  margin-top: 100;
  border-radius: 100;
  justify-content: center;
  align-items: center;
`

const Button = styled.TouchableOpacity`
  background-color: #CFFFE2;
  border-radius: 50;
  margin-top: 200;
`

export default App
