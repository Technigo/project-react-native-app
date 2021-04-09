import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Card = styled.View`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const ImageContainer = styled.View`
  height: 450px;
  width: 300px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const TextContainer = styled.View`
  width: 300px;
  background-color: black;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.Text`
  color: yellow;
`;

export const ComicCard = ({
  title,
  path,
  id,
  navigation,
  setComicsId,
}) => {
  const handlePress = () => {
    setComicsId(title);
    navigation.navigate("ComicDetails", { comicId: id });
  };

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <Card>
        <ImageContainer>
          <Image source={{ uri: `${path}/portrait_uncanny.jpg` }}></Image>
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
      </Card>
    </TouchableOpacity>
  );
};
