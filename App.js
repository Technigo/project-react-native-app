import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { Image, TouchableOpacity } from "react-native";

const api_key = "XQShTN8iJAL02niAQcnHt7kuIAZXD8pf";

const fetchRandomMovie = async tag => {
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

  useEffect(() => {
    console.log(`The tag is ${tag}`);
    if (!tag) {
      setLoading(false);
      return;
    }
    console.log("loading...");
    setLoading(true);
    fetchRandomMovie(tag).then(giphyData => {
      setGiphy(giphyData);
      setLoading(false);
    });
  }, [tag]);

  const { image_url } = giphy;

  console.log(image_url);

  return (
    <Container>
      <Button onPress={() => setTag("wat")} title="Press me">
        <ButtonText>Go Giphy!</ButtonText>
      </Button>
      {image_url && (
        <>
          <Title>Your random pick for: {tag}</Title>
          <Image
            style={{ width: "90%", height: "75%", resizeMode: "contain" }}
            source={{
              uri: image_url
            }}
          />
        </>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
`;

const Button = styled.TouchableOpacity`
  background: #762bc2;
  position: absolute;
  bottom: 80;
  padding: 10px 20px;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18;
`;

export default App;
