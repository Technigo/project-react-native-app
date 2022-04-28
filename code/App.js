import React, { useEffect, useState } from "react";
import {
  Item,
  SafeAreaView,
  FlatList,
  Image,
  Button,
  View,
  ScrollView,
  Pressable,
  Text,
} from "react-native";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";

const Container = styled.View`
  width: 300px;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  font-size: 18px;
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
  const [pageIndex, setPageIndex] = useState(1);
  const [mainPageIndex, setMainPage] = useState(1);
  const [selectedId, setSelectedId] = useState();

  // {
  //   title: "Yotam Ottolenghi",
  //   url: `https://content.guardianapis.com/food/series/yotam-ottolenghi-recipes?ids=food&&show-fields=thumbnail&api-key=${KEY}&pageIndex=${pageIndex}`,
  // },
  // {
  //   title: "Nigel Slater",
  //   url: `https://content.guardianapis.com/food/series/nigel-slater-recipes?ids=food&&show-fields=thumbnail&api-key=${KEY}&pageIndex=${pageIndex}`,
  // },
  // {
  const KEY = "2a13c9c5-db5c-48f4-b672-22e4e94ea6b5";
  const API = [
    {
      title: "Feast",
      url: `https://content.guardianapis.com/theguardian/feast?api-key=${KEY}&show-fields=thumbnail&pageIndex=${pageIndex}`,
    },
    {
      title: "Main Course",
      url: `https://content.guardianapis.com/food/main-course?api-key=${KEY}&show-fields=thumbnail&pageIndex=${mainPageIndex}`,
    },
    {
      title: "Side Dishes",
      url: `https://content.guardianapis.com/food/side-dishes?api-key=${KEY}&show-fields=thumbnail&pageIndex=${pageIndex}`,
    },
    {
      title: "Dessert",
      url: `https://content.guardianapis.com/food/dessert?api-key=${KEY}&show-fields=thumbnail&pageIndex=${pageIndex}`,
    },
    {
      title: "Vegetarian",
      url: `https://content.guardianapis.com/food/vegetarian?api-key=${KEY}&show-fields=thumbnail&pageIndex=${pageIndex}`,
    },
    {
      title: "Baking",
      url: `https://content.guardianapis.com/food/baking?api-key=${KEY}&show-fields=thumbnail&pageIndex=${pageIndex}`,
    },
  ];

  const BASE_URL = `https://content.guardianapis.com/food?api-key=${KEY}&show-fields=thumbnail`;

  // use callback and spread syntax to keep previous results and add new
  // consider object with pageIndex index to have more control over the data

  const getRecipes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        // setRecipes((previousRecipes) => [...previousRecipes, formatData(data.response.results)])
        // setRecipes((previousRecipes) => [
        //   ...previousRecipes,
        //   data.response.results.map((item) => ({
        //     id: item.id,
        //     title: item.webTitle,
        //     date: new window.Date(item.webPublicationDate).toLocaleString("en-US", {
        //       weekday: "long",
        //       year: "numeric",
        //       month: "long",
        //       day: "numeric",
        //     }),
        //     thumbnail: item.fields.thumbnail,
        //     url: item.webUrl,
        //   })),
        // ])
        setRecipes(
          data.response.results.map((item) => ({
            id: item.id,
            title: item.webTitle,
            date: new window.Date(item.webPublicationDate).toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            thumbnail: item.fields.thumbnail,
            url: item.webUrl,
          }))
        )
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRecipes(BASE_URL);
  }, []);

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
        <Button title="Link to recipe" onPress={() => WebBrowser.openBrowserAsync(item.url)} />
      </>
    );
  };

  return (
    <Container>
      <Subtitle>RECIPES FROM</Subtitle>
      <Title>The Guardian</Title>
      <Tags>
        {API.map((tag, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => {
                setSelectedId(index);
                getRecipes(tag.url);
              }}
              style={{
                margin: 3,
                padding: 5,
                backgroundColor: index === selectedId ? "blue" : "red",
              }}
            >
              <Text style={{ color: index === selectedId ? "white" : "black" }}>{tag.title}</Text>
            </Pressable>
          );
        })}
      </Tags>
      <SafeAreaView style={{ height: 625 }}>
        <FlatList data={recipes} renderItem={renderItem} keyExtractor={(item) => item.id} />
        <Button
          title="Load more recipes"
          onPress={() => {
            setMainPage(mainPageIndex + 1);
            getRecipes(API[0].url);
          }}
        />
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
