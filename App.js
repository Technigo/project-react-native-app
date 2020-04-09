import React from 'react'
import styled from 'styled-components/native'
import { Activity } from "./Activity";
import { View } from 'react-native';


const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-around;
  align-items: center;
`

const Title = styled.Text`
  font-size: 16px;
  color: black;
  font-weight: bold;
`

const App = () => {
  return (
    <Container>
      <Title>QUARANTINE ACTIVITY GENERATOR</Title>
      <Title>What to do now? Click the molecule!
      </Title>
      <Activity />
    </Container>
  )
}

export default App


/* <Stack.Navigator>
    <Stack.Screen name='Lottie' component={Lottie} />
  </Stack.Navigator> */


