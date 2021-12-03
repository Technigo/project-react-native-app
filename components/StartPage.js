import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";
import {
  useFonts,
  RobotoMono_400Regular,
} from "@expo-google-fonts/roboto-mono";

const StartPage = () => {
  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
  });
  return (
    <>
      <BackgroundImage source={require("../assets/background.png")}>
        <Wrapper>
          <Title style={{ fontFamily: "RobotoMono_400Regular" }}>QUOTE</Title>
          <SecondLine style={{ fontFamily: "RobotoMono_400Regular" }}>
            of the day
          </SecondLine>
          <NormalText style={{ fontFamily: "RobotoMono_400Regular" }}>
            Select a type of quote to start your day!
          </NormalText>
        </Wrapper>
      </BackgroundImage>
    </>
  );
};

export default StartPage;

const BackgroundImage = styled.ImageBackground`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.View`
  width: 70%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30%;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 700;
  color: black;
`;

const SecondLine = styled.Text`
  font-size: 30px;
  font-weight: 700;
`;

const NormalText = styled.Text`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20%;
  text-align: center;
`;
