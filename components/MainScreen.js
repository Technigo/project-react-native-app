// not used, to avoid repeted code I was thinking of having an mainscreen with all the styling, but it is not working
import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styled from "styled-components/native"; // use /native when you are styling core components
import { useFonts, Raleway_800ExtraBold } from "@expo-google-fonts/raleway";
import { POEM_URL } from "../utils/Urls";
import { Accelerometer } from "expo-sensors";

// STYLED COMPONENTS

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e65c5d;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const PresentationBox = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 10px;
`;

const TitleBox = styled.Text`
  font-family: "Raleway_800ExtraBold";
  font-size: 30px;
  font-weight: 800;
  color: #7ff9e1;
  padding: 10px;
`;

const ShakeBox = styled.Text`
font-family: "Raleway_800ExtraBold";
font-weight: bold;
font-size: 20px
color: black;
background-color: white;
margin-top: 30px;
`;
const MainScreen = (introText, titleText, contentText, shakeActivity) => {
  // const titleText = "title here";
  // const shakeActivity = "activity";
  // const introText = "intro text";

  return (
    <Container>
      <PresentationBox>{introText}</PresentationBox>
      <TitleBox>{`${titleText}`}</TitleBox>
      <Text>{`${contentText}`}</Text>
      <ShakeBox>Shake again for a new {`${shakeActivity}`}</ShakeBox>
    </Container>
  );
};

export default MainScreen;
