import React from 'react'
import { Button, TouchableOpacity, Text } from 'react-native'
import styled from "styled-components/native"


export const LandingPageScreen = (props) => {
  return (
    <StyledView>
      <StyledText>WildBerry App 🍓</StyledText>
      <StyledButtom onPress={() => props.navigation.replace("Map")}>
        <StyledButtonText> Get Started!</StyledButtonText>
      </StyledButtom>
      {/* <Button title="Get Started!" color="#3e206d" onPress={() => {
        props.navigation.replace("Map")
      }} /> */}
    </StyledView>
  )
}



LandingPageScreen.navigationOptions = {
  headerTitle: "",
  headerStyle: {
    backgroundColor: "#45969b"
  }

}


const StyledView = styled.View`
    background-color: #45969b;
    flex:1;
    justify-content: center;
    align-items: center;
`

const StyledText = styled.Text`
    color: #fff;
    font-size: 30; 
`
const StyledButtom = styled.TouchableOpacity`
    background-color: transparent;
    border: solid #fff;
    border-radius: 4;
    margin-top: 30;
    margin-left: 15;
    margin-right: 15;
    width: 150;
    padding-top: 8;
    padding-bottom: 8;
    padding-right: 8;
    padding-left: 8;
`

const StyledButtonText = styled.Text`
    color: #c70d3a;
    font-size: 18; 
    text-align: center;
`

