import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Pressable, Text } from "react-native";
import styled from "styled-components/native";
import * as WebBrowser from "expo-web-browser";

const Container = styled.View`
  width: 325px;
  margin: 0 auto;
  padding: 50px 0;
`;

const Title = styled.Text`
  font-family: Georgia;
  font-size: 40px;
  letter-spacing: -1.5px;
  font-weight: bold;
  color: rgb(6, 41, 97);
  margin-bottom: 10px;
`;

const Subtitle = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  color: rgb(128, 128, 128);
`;

const Recipe = styled.Text`
  font-family: Georgia;
  font-size: 17px;
  letter-spacing: -0.2px;

  font-weight: bold;
  color: rgb(125, 0, 104);
`;

const Date = styled.Text`
  font-size: 14px;
  margin: 12px 0 3px 0;
  color: rgb(128, 128, 128);
`;

const Tags = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Article = styled.View`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom-width: 0.5px;
  border-color: rgb(208, 223, 236);
`;

const Thumbnail = styled.Image`
  width: 325px;
  height: 325px;
  border-radius: 5px;
`;

const Loader = styled.ActivityIndicator`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const KEY = "2a13c9c5-db5c-48f4-b672-22e4e94ea6b5";
  const API = [
    {
      title: "Feast",
      url: `https://content.guardianapis.com/theguardian/feast?api-key=${KEY}&show-fields=thumbnail`,
    },
    {
      title: "Main Course",
      url: `https://content.guardianapis.com/food/main-course?api-key=${KEY}&show-fields=thumbnail`,
    },
    {
      title: "Side Dishes",
      url: `https://content.guardianapis.com/food/side-dishes?api-key=${KEY}&show-fields=thumbnail`,
    },
    {
      title: "Dessert",
      url: `https://content.guardianapis.com/food/dessert?api-key=${KEY}&show-fields=thumbnail`,
    },
    {
      title: "Vegetarian",
      url: `https://content.guardianapis.com/food/vegetarian?api-key=${KEY}&show-fields=thumbnail`,
    },
    {
      title: "Baking",
      url: `https://content.guardianapis.com/food/baking?api-key=${KEY}&show-fields=thumbnail`,
    },
  ];

  // use callback and spread syntax to keep previous results and add new
  // consider object with pageIndex index to have more control over the data

  const getRecipes = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(
          data.response.results.map((item) => ({
            id: item.id,
            title: item.webTitle,
            date: new window.Date(item.webPublicationDate).toLocaleString("en-UK", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
            thumbnail: item.fields.thumbnail,
            url: item.webUrl,
          }))
        );
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(
    () =>
      getRecipes(
        `https://content.guardianapis.com/theguardian/feast?api-key=${KEY}&show-fields=thumbnail`
      ),
    []
  );

  const renderItem = ({ item }) => {
    return (
      <Article key={item.id}>
        <Thumbnail source={{ uri: item.thumbnail }} />
        <Date>{item.date}</Date>
        <Pressable onPress={() => WebBrowser.openBrowserAsync(item.url)}>
          <Recipe>{item.title + " >"}</Recipe>
        </Pressable>
      </Article>
    );
  };

  return (
    <Container>
      <Subtitle>RECIPES FROM</Subtitle>
      <Title>The Guardian</Title>
      <Tags style={{ marginBottom: 10 }}>
        {API.map((tag, index) => {
          const isSelected = index === selectedId;
          return (
            <Pressable
              key={index}
              onPress={() => {
                setLoading(true);
                setSelectedId(index);
                getRecipes(tag.url);
              }}
              style={{
                margin: 4,
                padding: 8,
                backgroundColor: isSelected ? "rgb(6,41,97)" : "rgb(208,223,236)",
              }}
            >
              <Text
                style={{
                  color: isSelected ? "white" : "rgb(6,41,97)",
                  fontFamily: "Verdana",
                }}
              >
                {tag.title}
              </Text>
            </Pressable>
          );
        })}
      </Tags>
      <SafeAreaView style={{ height: 550 }}>
        {isLoading && <Loader />}
        <FlatList data={recipes} renderItem={renderItem} key={(item) => item.id} />
      </SafeAreaView>
    </Container>
  );
};

export default App;
