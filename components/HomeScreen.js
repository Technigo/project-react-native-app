import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import backgroundImage from "../assets/background.jpg";
import { Button, View } from "react-native";
import BackgroundVideo from "./VideoScreen";

const HomeContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;

`;

const HomeText = styled.Text`
  font-size: 48px;
  color: white;
  
`;

const HomeButton =styled.Button`
    
    
`;

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  const navigateToInfo = () => {
    navigation.navigate("Info", { name: "Jane" });
  };
 
  return (
      
    <HomeContainer source={backgroundImage}>
      <HomeText>Magic 8 Ball </HomeText>
        <HomeButton title="Ask the Eight ball" onPress={navigateToInfo}></HomeButton>
    </HomeContainer>

  );
};

export default HomeScreen;