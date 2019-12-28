import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Clipboard
} from "react-native";

import ShareButton from "./components/ShareButton";
import { GiphyLogo } from "./components/GiphyLogo";

const api_key = "XQShTN8iJAL02niAQcnHt7kuIAZXD8pf";

const staticTags = [
  ["happy", "Happy"],
  ["sad", "Sad"],
  ["angry", "Angry"],
  ["pain", "Pain"],
  ["awesome", "Awesome"],
  ["hungry", "Hungry"],
  ["sleepy", "Sleepy"],
  ["bored", "Bored"]
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
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

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

  return (
    <Container>
      {!tag && (
        <>
          <Title>How are you feeling today?</Title>
          <Image
            style={{ width: "90%", height: "40%", resizeMode: "center" }}
            source={require("./assets/man.jpg")}
          />
        </>
      )}

      {image_url && (
        <>
          <TagText>So, you're feeling {tag} today</TagText>
          <Image
            style={{ width: "90%", height: "50%", resizeMode: "contain" }}
            source={{
              uri: image_url
            }}
          />
          <BottomButtons>
            <ShareButton image_url={image_url} />
            <Button
              onPress={() => {
                Clipboard.setString(image_url);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 3000);
              }}
              active={copied}
            >
              <ButtonText>{copied ? "Copied" : "Copy"}</ButtonText>
            </Button>
          </BottomButtons>
        </>
      )}

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
      <GiphyLogo />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const ButtonWrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const Title = styled.Text`
  font-size: 33px;
  color: white;
  margin: 50px;
`;

const TagText = styled.Text`
  margin: 10px;
  color: white;
  font-size: 28px;
`;

const Button = styled.TouchableOpacity`
  background: ${({ active = false }) => (active ? "#2bc276" : "#762bc2")};
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
`;

const BottomButtons = styled.View`
  z-index:1;
  position: absolute;
  bottom:0;
  left:0;
  width:100%
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const TagButton = styled.TouchableOpacity`
  background: ${({ active = false }) => (active ? "#2bc276" : "#762bc2")};
  padding: 5px 10px;
  border-radius: 20px;
  margin: 10px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16;
`;

export default App;
