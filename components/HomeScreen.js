import React, { useEffect, useState } from "react";

import backgroundImage from "../assets/background.jpg";
import { ScreenContainer, Title, TextDescription, ScreenWrapper, ScreenButton, ScreenButtonText } from '../styledComponents/ScreenStyling';



    const HomeScreen = ({ navigation }) => {
      useEffect(() => {
        navigation.setOptions({ headerShown: false });
      });
    
      const navigateToInfo = () => {
        navigation.navigate("Ball", { name: "Back to first page" });
      };
 
  return (
    <ScreenContainer source={backgroundImage}>
        <Title>Magic Eight Ball</Title>
        <TextDescription>
        Ask a question if you dare ❤️‍🔥. You will always get an answer 
        </TextDescription>
        <ScreenWrapper>
            <ScreenButton onPress={navigateToInfo}>
                <ScreenButtonText> Ask the Eight Ball </ScreenButtonText>
            </ScreenButton>
        </ScreenWrapper>
    </ScreenContainer>
    
  
  );
};

export default HomeScreen;