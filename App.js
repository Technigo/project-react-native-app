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

/* lägga till margin-top: 100; på const View = styled.View`?*/

const Container = styled.View`
  flex: 1;
  background-color: #8CFFBA;
  justify-content: center;
  align-items: center;
`
const View = styled.View`
  flex: 1;
  background-color: #8CFFBA;
  justify-content: center;
  align-items: center;
`

export default App
