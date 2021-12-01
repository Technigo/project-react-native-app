import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from "react-native";
import styled from "styled-components/native";

const JudithBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBox = styled.ScrollView`
  /* display: flex; */
  /* align-items: center; */
  /* align-items: center; */
  /* flex-wrap: wrap;
  flex-direction: row; */
  width: 300px;
  height: auto;
`;

const JudithImg = styled.Image`
  width: 150px;
  height: 150px;
`;

const Judith = () => {
  const [data, setData] = useState({});

  const getJudiths = () => {
    fetch(
      "https://www.rijksmuseum.nl/api/en/collection?key=ixrIdKyM&f.involvedMaker=Judith+Leyster"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.artObjects);
      });
  };

  return (
    <JudithBox>
      <Text>hello from Judith</Text>
      <Button title="get Judith" onPress={getJudiths} />
      {data.length > 0 &&
        data.map((art) => (
          <ImageBox key={art.id}>
            <Text>{art.title}</Text>
            <JudithImg source={art?.webImage?.url} />
          </ImageBox>
        ))}
    </JudithBox>
  );
};

export default Judith;
