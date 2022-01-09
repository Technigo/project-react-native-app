import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
`;

const ArtistText = styled.Text`
  font-weight: 700;
  font-size: 30px;
`;

const APIButton = styled.TouchableOpacity`
  width: 50%;
  background-color: green;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 2rem;
  color: white;
`;
const TextTitle = styled.Text`
  font-size: 20px;
`;

const ButtonApi = () => {
  const [item, setItem] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const generateItems = () => {
    const randomOffset = Math.floor(Math.random() * 1900);

    setLoading(true);
    fetch(
      `https://api.smk.dk/api/v1/art/search/?keys=*&offset=${randomOffset}&rows=1000&lang=en&filters=[has_image:true]`
    )
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * 999);
        setItem(data.items[randomIndex]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <TextTitle>Click the button to generate a random art piece </TextTitle>
      <APIButton onPress={generateItems}>
        <Text>Ready?</Text>
      </APIButton>
      {item !== undefined && (
        <View>
          <ArtistText>{item.artist[0]}</ArtistText>
          <TextTitle>Title:</TextTitle>
          {item.titles.map((title) => (
            <Text key={title.title}>{title.title}</Text>
          ))}
          <ImageBackground>
            <img
              width="300"
              height="500"
              src={item.image_thumbnail}
              alt={item.titles[0].title}
            />
          </ImageBackground>
          <TextTitle>Technique/s:</TextTitle>
          <Text key="Techniques">{item.techniques}</Text>
          <TextTitle>Time period:</TextTitle>
          <Text key="Time Period">{item.production_date[0].period}</Text>
        </View>
      )}
    </Container>
  );
};

export default ButtonApi;
