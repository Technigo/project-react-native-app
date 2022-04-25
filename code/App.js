import React, { useEffect, useState, useRef } from "react";
import { Image, Button, ScrollView, Icon } from "react-native";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";

const Container = styled.View`
  width: 300px;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Recipe = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Date = styled.Text`
  font-style: italic;
  color: grey;
`;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const URL =
    "https://content.guardianapis.com/food/series/yotam-ottolenghi-recipes?ids=food&&show-fields=thumbnail&api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5";

  const dateFormatter = (date) => {
    return new window.Date(date).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        setRecipes(
          data.response.leadContent.map((recipe) => ({
            id: recipe.id,
            title: recipe.webTitle,
            date: dateFormatter(recipe.webPublicationDate),
            thumbnail: recipe.fields.thumbnail,
            url: recipe.webUrl,
          }))
        )
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <ScrollView style={{ marginTop: 16 }} ref={ref}>
      <Container>
        <Title>Yotam Ottolenghi Recipes from The Guardian</Title>
        {recipes.map((recipe) => {
          return (
            <>
              <Image
                source={{ uri: recipe.thumbnail }}
                style={{ width: 300, height: 300, marginTop: 24 }}
              />
              <Recipe key={recipe.id}>{recipe.title}</Recipe>
              <Date>{recipe.date}</Date>
              <Button
                title="Link to recipe"
                onPress={() => {
                  WebBrowser.openBrowserAsync(recipe.url);
                }}
              />
            </>
          );
        })}
      </Container>
    </ScrollView>
  );
};

export default App;
