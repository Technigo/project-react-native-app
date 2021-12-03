import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { PROGRAMMING_API } from "../utils/urls";
import styled from "styled-components/native";
import {
  useFonts,
  RobotoMono_400Regular,
} from "@expo-google-fonts/roboto-mono";

const ProgrammerQuote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
  });

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch(PROGRAMMING_API)
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="black" />;
  }

  return (
    <>
      <BackgroundImage source={require("../assets/programmer.png")}>
        <Wrapper>
          <ButtonWrapper>
            <ButtonText style={{ fontFamily: "RobotoMono_400Regular" }}>
              Click to generate a programmer quote!
            </ButtonText>
            <APIButton onPress={generateQuote}>
              <Text style={{ fontFamily: "RobotoMono_400Regular" }}>
                CLICK!
              </Text>
            </APIButton>
          </ButtonWrapper>
          <TextWrapper>
            <Quote style={{ fontFamily: "RobotoMono_400Regular" }}>
              {quote.en}
            </Quote>
            <Author style={{ fontFamily: "RobotoMono_400Regular" }}>
              Author: {quote.author}
            </Author>
          </TextWrapper>
        </Wrapper>
      </BackgroundImage>
    </>
  );
};

export default ProgrammerQuote;

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
`;

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% 0;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`;

const APIButton = styled.TouchableOpacity`
  width: 60%;
  background-color: #d4d4d4;
  text-align: center;
  padding: 5%;
  margin-top: 10px;
`;

const TextWrapper = styled.View`
  background-color: #d4d4d4;
`;

const Quote = styled.Text`
  font-size: 24px;
  text-align: center;
`;

const Author = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;
