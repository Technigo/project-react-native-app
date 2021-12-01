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
  align-items: center;
  justify-content: center;
  background: gray;
`;

const JudithImg = styled.Image`
  width: 150px;
  height: 150px;
`;

const TitleText = styled.Text`
  font-weight: bold;
  text-align: center;
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
          <ScrollView
            key={art.id}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
              border: 1,
              border: "solid",
              padding: 5,
              margin: 10,
              width: 180,
            }}
          >
            <TitleText>{art.title}</TitleText>
            <JudithImg source={art?.webImage?.url} />
          </ScrollView>
        ))}
    </JudithBox>
  );
};

export default Judith;
