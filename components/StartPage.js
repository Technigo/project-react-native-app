import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Linking,
  Image,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";

const StartPage = () => {
  return (
    <>
      <BackgroundImage source={require("../assets/background.jpg")}>
        <Wrapper>
          <Title>QUOTE</Title>
          <Title>of the day</Title>
          <Title>Select a type of quote to start your day!</Title>
        </Wrapper>
      </BackgroundImage>
    </>
  );
};

export default StartPage;

const BackgroundImage = styled.ImageBackground`
  height: 100vh;
  display: flex;
  align-items: center;
  filter: grayscale(100%);
`;

const Wrapper = styled.View`
  width: 70%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: black;
`;
