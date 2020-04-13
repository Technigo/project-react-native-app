import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Modal, Image } from "react-native";
import image from "../assets/roland-losslein-DmDYX_ltI48-unsplash.jpg";
import styled, { ThemeProvider } from "styled-components"

export const HomeScreen = ({navigation}) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [myHouse, setMyHouse] = useState("");
     
  const houseThemes = [];
    houseThemes[""] = {
      main: "transparent",
      border: "transparent",
      housecolor: "transparent",
      button: "transparent",
    }
    
    houseThemes['Gryffindor'] = {
      main: "#ae0001",
      border: "#740001",
      housecolor: "#D3A625",
      button: "#EEBA30",
    }

    houseThemes['Slytherin'] = {
      main: "#2f6731",
      border: "#0e1e0e",
      housecolor: "#ffaa3f",
      button: "#AAAAAA",
    };

    houseThemes['Ravenclaw'] = {
      main: "#222f5b",
      border: "#0e1a40",
      housecolor: "#8A4E1C",
      button: "#BCBCBC",
    }

    houseThemes['Hufflepuff'] = {
      main: "#FCD233",
      border: "#41423D",
      housecolor: "#eeba30",
      button: "#AAAAAA",
    }

  const sortHouse = () => {
      fetch("https://www.potterapi.com/v1/sortinghat")
      .then((response) => response.json())
      .then(house => setMyHouse(house))
  }
  
  return (

    <StyledImageBackground source={image} >
      <StyledView>

        <StyledModalView>
        <ThemeProvider theme={houseThemes[myHouse]}>
        <Modal transparent={true} visible={modalVisible}>

          <ModalView>
            <StyledModalText>{myHouse}</StyledModalText>
            <TouchableOpacity onPress={() => {setModalVisible(false); navigation.navigate('Question 1', {name: 'Question 1'})}}>
            <StyledQuizButton>Start quiz</StyledQuizButton>
            </TouchableOpacity>
          </ModalView>
        
        </Modal>
        </ThemeProvider>
        </StyledModalView>

        <StyledTitle>Press the button to begin the sorting ceremony and take your O.W.L.s.</StyledTitle>
        
        <TouchableOpacity onPress={() => {sortHouse(); setModalVisible(true)}}>
          <StyledTextButton>Sorting ceremony</StyledTextButton>
        </TouchableOpacity>
      
      </StyledView>
    </StyledImageBackground>
  );
}

const StyledModalView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ModalView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.main};
  border: 20px solid ${props => props.theme.border};
  height: 80%;
  margin-top: auto;
  margin-bottom: auto;
`

const StyledModalText = styled.Text`
  color: black;
  background-color: ${props => props.theme.housecolor};
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  margin-top: 10px;
  padding: 15px 20px;
`
const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`
const StyledImageBackground = styled.ImageBackground`
  display: flex;
  height: 100%;
  width: 100%;
`
const StyledTitle = styled.Text`
  color: black;
  background-color: rgba(130, 168, 229, 0.8);
  border: 1px solid rgb(130, 168, 229);
  font-size: 30px;
  font-weight: bold;
  font-family: monospace;
  text-align: center;
  padding: 0 20px;
`
const StyledQuizButton = styled.Text`
  background-color: ${props => props.theme.button};
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 35;
  padding: 10px;
  border-radius: 20px;
`
const StyledTextButton = styled.Text`
  background-color: #E4E8EF;
  font-size: 25px;
  font-weight: bold;
  font-family: monospace;
  margin-top: 35;
  padding: 10px;
  border-radius: 20px;
`
