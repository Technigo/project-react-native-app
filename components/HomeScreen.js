import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components/native";

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);
  const CATEGORIES_URL = "https://sv443.net/jokeapi/v2/categories";

  useEffect(() => {
    fetch(CATEGORIES_URL)
      .then(response => response.json())
      .then(json => setCategories(json.categories));
  }, []);

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
  background-color: #000;
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
  margin-bottom: 10px;
  border-radius: 10px;
  background: rgba(59, 59, 59, 0.4);
`;

const ButtonText = styled.Text`
  font-size: 25px;
  color: #fff;
`;
