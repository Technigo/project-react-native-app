import React from 'react'
import styled from 'styled-components/native'
import { Touchable } from './components/Touchable'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const StyledView = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 25px;
  color: palevioletred;
`

const InfoText = styled.Text`
  font-size: 18px;
`

const HomeScreen = () => {
  return (
    <StyledView>
      <Title>Home Screen</Title>
    </StyledView>
    
  )
}

const DetailsScreen = () => {

  return (
    <StyledView>
      <InfoText>Some info of some sort</InfoText>
    </StyledView>
  )
  
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App

  
