import React from "react";
import styled from "styled-components/native";
import { Dimensions, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;

const screenWidth = 320;

const ImageContainer = styled.Image`
  width: 100%;
  height: 100%;
`;

export const MovieCover = ({ navigation, media_id, poster_path }) => {
  return (
    <TouchableOpacity
      style={{
        width: (windowWidth * 100) / screenWidth,
        height: (windowWidth * 150) / screenWidth,
        marginBottom: (windowWidth * 11) / screenWidth,
      }}
      onPress={() => navigation.navigate("media-detail", { media_id })}
    >
      <ImageContainer
        source={{ uri: `http://image.tmdb.org/t/p/w780${poster_path}` }}
      />
    </TouchableOpacity>
  );
};
