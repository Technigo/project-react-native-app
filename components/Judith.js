import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";

const JudithBox = styled.View`
  align-items: center;
  justify-content: center;
  background: gray;
`;

const JudithImg = styled.Image`
  width: 200px;
  height: 200px;
`;

const TitleText = styled.Text`
  font-weight: bold;
  text-align: center;
  width: 80%;
`;

const Judith = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [showImage, setShowImage] = useState(true);

  const getJudiths = () => {
    setLoading(true);
    fetch(
      "https://www.rijksmuseum.nl/api/en/collection?key=ixrIdKyM&f.involvedMaker=Judith+Leyster"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.artObjects);
      })
      .finally(() => setLoading(false), setShowButton(false));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#5E3B3E" />;
  }

  return (
    <JudithBox>
      <Text>hello from Judith</Text>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          // width: 300,
        }}
      >
        {showButton && <Button title="get Judith" onPress={getJudiths} />}
        {data.length > 0 &&
          data.map((art) => (
            <View
              key={art.id}
              style={{
                border: 1,
                border: "solid",
                padding: 5,
                margin: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TitleText>{art.title}</TitleText>
              {art?.webImage?.url && (
                <JudithImg source={{ uri: `${art?.webImage?.url}` }} />
              )}
            </View>
          ))}
      </ScrollView>
    </JudithBox>
  );
};

export default Judith;
