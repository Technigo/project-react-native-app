import React, { useEffect, useState } from "react";
import { Image, Button, View, ScrollView } from "react-native";
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

const Tags = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [endpoint, setEndpoint] = useState(
    "https://content.guardianapis.com/theguardian/feast?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"
  );
  // const OTTOLENGHI_URL =
  // "https://content.guardianapis.com/food/series/yotam-ottolenghi-recipes?ids=food&&show-fields=thumbnail&api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5";

  // const FEAST_URL = "https://content.guardianapis.com/theguardian/feast?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"

  // const VEGGIE_URL = "https://content.guardianapis.com/food/vegetables?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"
  // const DESSERT_URL = "https://content.guardianapis.com/food/dessert?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"
  const KEY = "?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5";
  const QUERIES = "&show-fields=thumbnail";
  const API = {
    ottolenghi: "https://content.guardianapis.com/food/series/yotam-ottolenghi-recipes",
    nigelSlater: "https://content.guardianapis.com/food/series/nigel-slater-recipes",
    dessert: "https://content.guardianapis.com/food/dessert",
    vegetarian: "https://content.guardianapis.com/food/vegetarian",
    mainCourse: "https://content.guardianapis.com/food/main-course",
    snacks: "https://content.guardianapis.com/food/snacks",
    sideDishes: "https://content.guardianapis.com/food/side-dishes",
    baking: "https://content.guardianapis.com/food/baking",
    feast: "https://content.guardianapis.com/theguardian/feast",
  };

  const URL = endpoint + KEY + QUERIES;

  const dateFormatter = (date) => {
    return new window.Date(date).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    getRecipes(URL);
  }, []);

  const getRecipes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        setRecipes(
          data.response.results.map((recipe) => ({
            id: recipe.id,
            title: recipe.webTitle,
            date: dateFormatter(recipe.webPublicationDate),
            thumbnail: recipe.fields.thumbnail,
            url: recipe.webUrl,
          }))
        )
      )
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Title>Recipes from The Guardian</Title>
      <Tags>
        <Button
          title="baking"
          onPress={() =>
            getRecipes(
              "https://content.guardianapis.com/food/dessert?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"
            )
          }
        />
        <Button
          title="vegetarian"
          onPress={() =>
            getRecipes(
              "https://content.guardianapis.com/food/vegetarian?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"
            )
          }
        />
      </Tags>
      <ScrollView style={{ marginTop: 16 }}>
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </ScrollView>
    </Container>
  );
};

export default App;

const RecipeCard = ({ recipe }) => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Image
        key={recipe.id}
        source={{ uri: recipe.thumbnail }}
        style={{ width: 300, height: 300, marginTop: 24 }}
      />
      <Recipe>{recipe.title}</Recipe>
      <Date>{recipe.date}</Date>
      <Button
        title="Link to recipe"
        onPress={() => {
          WebBrowser.openBrowserAsync(recipe.url);
        }}
      />
    </View>
  );
};
