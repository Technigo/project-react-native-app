
import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from "react-native";


const value = [
  "racoon",
  "dog",
  "unicorn",
  "party"]

export const fetchGiphy = async value => {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=lByN5BPEwk9MR74phtPh0JpBBBBWyuVH&tag=${value}&rating=G`
  );
  const { data } = await res.json();
  return data;
};

const Gif = () => {
  const [value, setValue] = useState("");
  const [giphy, setGiphy] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setGiphy(json.data));
  }, []);
  return <View />;
}

