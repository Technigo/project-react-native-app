import React from 'react'
import {Button} from 'react-native'
import styled from "styled-components/native"


export const LandingPageScreen = (props) => {
  return (
    <StyledView>
      <StyledText>LETS FIND YOUR NEARBY RESTAURANTS!</StyledText>
      <Button title="Get Started!" color="#3e206d" onPress={() => {
        props.navigation.replace("Map")
      }} />
    </StyledView>
  )
}


LandingPageScreen.navigationOptions = {
  headerTitle: "",
  headerStyle: {
    backgroundColor: "#be9fe1"
  }

}


const StyledView = styled.View`
    background-color: #be9fe1;
    flex:1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    color: #fff;
    font-size: 18;
   
`


