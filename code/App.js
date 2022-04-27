import React, { useEffect, useState } from "react";
import { Item, SafeAreaView, FlatList, Image, Button, View, ScrollView } from "react-native";
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
  const [page, setPage] = useState(1);

  // const OTTOLENGHI_URL =
  // "https://content.guardianapis.com/food/series/yotam-ottolenghi-recipes?ids=food&&show-fields=thumbnail&api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5";

  // const FEAST_URL = "https://content.guardianapis.com/theguardian/feast?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"

  // const VEGGIE_URL = "https://content.guardianapis.com/food/vegetables?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"
  // const DESSERT_URL = "https://content.guardianapis.com/food/dessert?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail"

  const API = {
    ottolenghi: {
      title: "Yotam Ottolenghi",
      url: `https://content.guardianapis.com/food/series/yotam-ottolenghi-recipes?ids=food&&show-fields=thumbnail&api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&page=${page}`,
    },
    nigelSlater: {
      title: "Nigel Slater",
      url: `https://content.guardianapis.com/food/series/nigel-slater-recipes?ids=food&&show-fields=thumbnail&api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&page=${page}`,
    },
    dessert: {
      title: "Dessert",
      url: `https://content.guardianapis.com/food/dessert?ids=food&&show-fields=thumbnail&api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&page=${page}`,
    },
    vegetarian: {
      title: "Vegetarian",
      url: `https://content.guardianapis.com/food/vegetarian?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail&page=${page}`,
    },
    mainCourse: {
      title: "Main Course",
      url: `https://content.guardianapis.com/food/main-course?ids=food&&show-fields=thumbnail&api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&page=${page}`,
    },
    sideDishes: {
      title: "Side Dishes",
      url: `https://content.guardianapis.com/food/side-dishes?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail&page=${page}`,
    },
    feast: {
      title: "Feast",
      url: `https://content.guardianapis.com/theguardian/feast?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail&page=${page}`,
    },
    baking: {
      title: "Baking",
      url: `https://content.guardianapis.com/food/baking?ids=food&&show-fields=thumbnail&api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&page=${page}`,
    },
  };

  const BASE_URL =
    "https://content.guardianapis.com/food/dessert?api-key=2a13c9c5-db5c-48f4-b672-22e4e94ea6b5&show-fields=thumbnail";

  const dateFormatter = (date) => {
    return new window.Date(date).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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

  const renderItem = ({ item }) => {
    return (
      <>
        <Image
          key={item.id}
          source={{ uri: item.thumbnail }}
          style={{ width: 300, height: 300, marginTop: 24 }}
        />
        <Recipe>{item.title}</Recipe>
        <Date>{item.date}</Date>
        <Button
          title="Link to recipe"
          onPress={() => {
            WebBrowser.openBrowserAsync(item.url);
          }}
        />
      </>
    );
  };

  useEffect(() => {
    getRecipes(BASE_URL);
  }, []);

  return (
    <Container>
      <Title>Recipes from The Guardian</Title>
      <Tags>
        <Button title={API.sideDishes.title} onPress={() => getRecipes(API.sideDishes.url)} />
        <Button title={API.vegetarian.title} onPress={() => getRecipes(API.vegetarian.url)} />
        <Button title={API.feast.title} onPress={() => getRecipes(API.feast.url)} />
      </Tags>
      <SafeAreaView>
        <FlatList data={recipes} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </SafeAreaView>
    </Container>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
