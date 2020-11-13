import React from "react";
import { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import Joke from "./Joke";

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const CATEGORIES_URL = "https://sv443.net/jokeapi/v2/categories";

  useEffect(() => {
    fetch(CATEGORIES_URL)
      .then(response => response.json())
      .then(json => setCategories(json.categories));
  }, []);
  console.log(categories);

  return (
    <Container>
      {categories.map(category => (
        <JokeButton
          key={category}
          onPress={() => navigation.navigate("Joke", { itemId: category })}
        >
          <ButtonText>{category}</ButtonText>
        </JokeButton>
      ))}
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  justify-content: center;
  align-items: center;
  padding: 20px 0 10px 0;
`;

const JokeButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  width: 85%;
  height: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  background colour: rgba(0,0,0, 0.8);
`;

const ButtonText = styled.Text`
  font-size: 25px;
  color: #fff;
`;
