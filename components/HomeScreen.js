
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import backgroundImage from "../assets/background.jpg";
import { Button } from "react-native";

const HomeContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const HomeText = styled.Text`
  font-size: 48px;
`;

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  },[]);

  const navigateToInfo = () => {
    navigation.navigate("Info", { name: "Jane" });
  };

  return (
    <HomeContainer source={backgroundImage}>
      <HomeText>Welcome to Our Multi-page App</HomeText>
      <Button title="Info" onPress={navigateToInfo}></Button>
    </HomeContainer>
  );
};

export default HomeScreen;