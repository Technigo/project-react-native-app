import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components/native";

const Joke = ({ route }) => {
  const [joke, setJoke] = useState({});
  const { itemId } = route.params;

  const JOKE_URL = `https://sv443.net/jokeapi/v2/joke/${itemId}`;

  useEffect(() => {
    reFetchData();
  }, []);

  const reFetchData = () => {
    fetch(JOKE_URL)
      .then(response => response.json())
      .then(json => {
        if (json.flags.racist || json.flags.religious) {
          reFetchData();
        } else {
          setJoke(json);
        }
      });
  };

  return (
    <MainContainer>
      <JokeContainer>
        <JokeHeader>({joke.category} Joke)</JokeHeader>
        {joke.type === "twopart" && (
          <>
            <SetupText>{joke.setup}</SetupText>
            <DeliveryText>{joke.delivery}</DeliveryText>
          </>
        )}
        {joke.type === "single" && <SetupText>{joke.joke}</SetupText>}
      </JokeContainer>
      <RefreshButton>
        <RefreshButtonText onPress={() => reFetchData()}>
          New Joke
        </RefreshButtonText>
      </RefreshButton>
    </MainContainer>
  );
};

export default Joke;

const MainContainer = styled.View`
  flex: 1;
  background-color: #000000;
  justify-content: space-evenly;
  align-items: center;
`;

const JokeContainer = styled.View`
  width: 80%;
  padding: 20px 20px;
  border: 2px solid #fff;
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const JokeHeader = styled.Text`
  font-size: 11px;
  margin-bottom: 20px;
`;

const SetupText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const DeliveryText = styled.Text`
  font-size: 16px;
  font-style: italic;
`;

const RefreshButton = styled.TouchableOpacity`
  align-items: center;
  border: 2px solid #fff;
  width: 50%;
  height: 50px;
  border-radius: 10px;
  background: rgba(59, 59, 59, 0.4);
  padding: 10px;
  margin-top: 10px;
`;

const RefreshButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  display-content: center;
`;
