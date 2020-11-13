
import React, { useEffect, useState } from "react";
import styled, { withTheme } from "styled-components/native";
import backgroundImage from "../assets/background5.jpg";
import {
  TouchableOpacity, 
  Text,
} from "react-native";


const HomeContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const HomeText = styled.Text`
  font-size: 40px;
  color:white;
  font-weight:bold;
  width:90%;
`;
const View = styled.TouchableOpacity`
  padding: 20px;
  background-color: #B250A1;
  border-radius:50;
  margin:30px;
`;


const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  },[]);

  const navigateToInfo = () => {
    navigation.navigate("Info", { name: "Info" });
  };

  return (
    <HomeContainer source={backgroundImage}>
      <HomeText>Hey, do you want to learn a secret of life?</HomeText>
      <View>
        <TouchableOpacity onPress={navigateToInfo}>
        <Text style={{color:'white', fontWeight:'700', fontSize:25}}>Ok</Text>
      </TouchableOpacity>
      </View>
    </HomeContainer>
  );
};

export default HomeScreen;