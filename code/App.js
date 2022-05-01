import React, { useEffect, useState, useRef } from "react";
import { FlatList, Pressable, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import styled from "styled-components/native";
import { API } from "./src/api/api";
import TagPressable from "./src/components/TagPressable";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedId, setSelectedId] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const flatListRef = useRef();

  const scrollToTop = () => {
    flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
    setShowButton(false);
  };

  const handleOnPress = (url, index) => {
    setLoading(true);
    setSelectedId(index);
    getRecipes(url);
  };

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
        scrollToTop();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => getRecipes(API[0].url), []);

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
      <Tags>
        {API.map((tag, index) => {
          return (
            <TagPressable
              key={index}
              title={tag.title}
              url={tag.url}
              index={index}
              isSelected={index === selectedId}
              onPress={handleOnPress}
            />
          );
        })}
      </Tags>
      <SafeAreaViewStyled>
        {isLoading && <Loader />}
        <FlatList
          data={recipes}
          renderItem={renderItem}
          key={(item) => item.id}
          ref={flatListRef}
          onEndReached={() => setShowButton(true)}
        />
      </SafeAreaViewStyled>
      {showButton && (
        <Pressable onPress={() => scrollToTop()}>
          <PressToTop>▲ Back to top</PressToTop>
        </Pressable>
      )}
    </Container>
  );
};

export default App;

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

const Tags = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Thumbnail = styled.Image`
  width: 325px;
  height: 325px;
  border-radius: 5px;
`;

const Date = styled.Text`
  font-size: 14px;
  margin: 12px 0 3px 0;
  color: rgb(128, 128, 128);
`;

const Recipe = styled.Text`
  font-family: Georgia;
  font-weight: bold;
  font-size: 17px;
  letter-spacing: -0.2px;
  color: rgb(125, 0, 104);
`;

const Article = styled.View`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom-width: 0.5px;
  border-color: rgb(208, 223, 236);
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

const SafeAreaViewStyled = styled.SafeAreaView`
  height: 540px;
`;

const PressToTop = styled(Subtitle)`
  text-align: center;
`;
