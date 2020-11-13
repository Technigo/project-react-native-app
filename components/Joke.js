import React from "react";
import { NativeAppEventEmitter, Text } from "react-native";
import { useState, useEffect } from "react";
import styled from "styled-components/native";

const Joke = ({ route }) => {
  const [joke, setJoke] = useState({});
  const { itemId } = route.params;

  const JOKE_URL = `https://sv443.net/jokeapi/v2/joke/${itemId}`;

  useEffect(() => {
    fetch(JOKE_URL)
      .then(response => response.json())
      .then(json => setJoke(json));
  }, []);

  return (
    <MainContainer>
      <JokeContainer>
        <Text>{joke.setup}</Text>
        <Text>{joke.delivery}</Text>
        <Text>{joke.joke}</Text>
      </JokeContainer>
    </MainContainer>
  );
};

export default Joke;

const MainContainer = styled.View`
  flex: 1;
  background-color: #000000;
  justify-content: center;
  align-items: center;
`;

const JokeContainer = styled.View`
  width: 80%;
  padding: 30px 20px;
  border: 2px solid #fff;
  background-color: #f2f2f2;
  border-radius: 10px;
`;
