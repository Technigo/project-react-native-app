import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const screenWidth = 320;

const MovieContainer = styled.TouchableOpacity`
  width: ${(windowWidth * 100) / screenWidth}px;
  height: ${(windowWidth * 150) / screenWidth}px;
  margin-bottom: ${(windowWidth * 11) / screenWidth}px;
`;
const ImageContainer = styled.Image`
  width: 100%;
  height: 100%;
`;

export const MovieCover = ({ navigation, media_id, poster_path }) => {
  return (
    <MovieContainer
      onPress={() => navigation.navigate("media-detail", { media_id })}
    >
      <ImageContainer
        source={{ uri: `http://image.tmdb.org/t/p/w780${poster_path}` }}
      />
    </MovieContainer>
  );
};
