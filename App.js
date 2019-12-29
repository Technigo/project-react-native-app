import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Image, ActivityIndicator } from "react-native";

import { ButtonText, ImageWrap } from "./components/StyledCollection";
import GifView from "./components/GifView";
import GiphyLogo from "./components/GiphyLogo";

const api_key = "XQShTN8iJAL02niAQcnHt7kuIAZXD8pf";

const staticTags = [
  ["happy", "Happy"],
  ["sad", "Sad"],
  ["angry", "Angry"],
  ["pain", "Pain"],
  ["awesome", "Awesome"],
  ["hungry", "Hungry"],
  ["sleepy", "Sleepy"]
];

const fetchRandomGiphy = async tag => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`
  );
  const { data } = await res.json();
  return data;
};

const App = () => {
  const [tag, setTag] = useState("");
  const [giphy, setGiphy] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!tag) {
      setLoading(false);
      return;
    }

    setLoading(true);
    fetchRandomGiphy(tag).then(giphyData => {
      setGiphy(giphyData);
      setLoading(false);
    });
  }, [tag]);

  const { image_url } = giphy;

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#ffffff" />
        <GiphyLogo />
      </Container>
    );
  }

  // Tag cloud used on multiple places
  const TagCloud = () => (
    <ButtonWrap>
      {staticTags.map(([tagName, label]) => (
        <TagButton
          key={tagName}
          onPress={() => setTag(tagName)}
          active={tagName === tag}
        >
          <ButtonText>{label}</ButtonText>
        </TagButton>
      ))}
    </ButtonWrap>
  );

  // Return Gif view if image is found
  if (image_url) {
    return (
      <Container>
        <GifView image_url={image_url} tag={tag} />
        <TagCloud />
        <GiphyLogo />
      </Container>
    );
  }

  // Start view
  return (
    <Container>
      {!tag && (
        <>
          <Title>How are you feeling today?</Title>
          <ImageWrap>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "center"
              }}
              source={require("./assets/man.jpg")}
            />
          </ImageWrap>
        </>
      )}
      <TagCloud />
      <GiphyLogo />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding-top: 0;
`;

const ButtonWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  margin-top: 20px;
  margin-bottom: 73px;
`;

const Title = styled.Text`
  font-size: 33px;
  color: white;
  margin: 0 0 20px;
  padding: 10px 20px 20px;
  width: 100%;
`;

const TagButton = styled.TouchableOpacity`
  background-color: ${({ active = false }) => (active ? "#2bc276" : "#762bc2")};
  padding: 10px 20px;
  border-radius: 20px;
  margin: 5px 5px;
`;

export default App;
