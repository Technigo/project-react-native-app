import React, { useState, useEffect } from "react";
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
import { MOVIE_API } from "../utils/urls";
import styled from "styled-components/native";

const MovieQuote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <>
      <BackgroundImage source={require("../assets/movie.jpg")}>
        <Wrapper>
          <ButtonWrapper>
            <ButtonText>Click to generate a movie/serie quote!</ButtonText>
            <APIButton onPress={generateQuote}>
              <Text>CLICK!</Text>
            </APIButton>
          </ButtonWrapper>
          <TextWrapper>
            <Quote>{quote.quote}</Quote>
            <Show>Movie/Serie: {quote.show}</Show>
          </TextWrapper>
        </Wrapper>
      </BackgroundImage>
    </>
  );
};

export default MovieQuote;

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

const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10% 0;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const APIButton = styled.TouchableOpacity`
  width: 60%;
  background-color: #797979;
  text-align: center;
  padding: 5%;
  margin-top: 10px;
`;

const TextWrapper = styled.View`
  background-color: #d4d4d4;
`;

const Quote = styled.Text`
  font-size: 24px;
`;

const Show = styled.Text`
  font-size: 20px;
  margin-top: 10px;
`;
