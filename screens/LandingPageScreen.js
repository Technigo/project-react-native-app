import React from 'react'
import styled from "styled-components/native"


export const LandingPageScreen = (props) => {
  return (
    <StyledView>
      <StyledText>WildBerry🍓</StyledText>
      <StyledSubText>Keep track of your favorite places</StyledSubText>
      <StyledButton onPress={() => props.navigation.replace("Map")}>
        <StyledButtonText> Get Started!</StyledButtonText>
      </StyledButton>
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
    font-size: 45;
    margin: 10px; 
    font-weight: bold;
   
`

const StyledSubText = styled.Text`
    color: #fff;
    font-size: 20; 
`
const StyledButton = styled.TouchableOpacity`
    background-color: transparent;
    border: solid #fff;
    border-radius: 4;
    margin-top: 30;
    margin-left: 15;
    margin-right: 15;
    width: 200;
    padding-top: 12;
    padding-bottom: 12;
    padding-right: 15;
    padding-left: 15;
`

const StyledButtonText = styled.Text`
    color: #c70d3a;
    font-size: 22; 
    text-align: center;
`

