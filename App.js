import React from 'react'
import styled from 'styled-components/native'
import { Activity } from "./Activity";
import { View } from 'react-native';


const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50;
`

const Title = styled.Text`
  font-size: 16px;
  color: red;
  font-weight: bold;
`

const App = () => {
  return (
    <Container>
      <Title>QUARANTINE ACTIVITY GENERATOR</Title>
      <Activity />
      <Title>
      </Title>
    </Container>
  )
}

export default App


/* <Stack.Navigator>
    <Stack.Screen name='Lottie' component={Lottie} />
  </Stack.Navigator> */


