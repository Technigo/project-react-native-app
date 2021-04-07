import React from "react";
import styled from "styled-components/native";

const CardContainer = styled.View`
  display: flex;
  background-color: #3d3834;
  min-height: 120px;
  margin-bottom: 5px;
  flex-direction: row;
  flex-wrap: wrap;
`;
const MovieImage = styled.Image`
  width: 100px;
  height: 150px;
`;
const TextContainer = styled.Text`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 200px;
`;
const TitleText = styled.Text`
  color: white;
  font-size: 18px;
  padding: 5px;
`;
const DateText = styled.Text`
  color: white;
  padding: 5px;
`;

const MoviePoster = ({ title, poster_path, release_date }) => {
  return (
    <CardContainer>
      <MovieImage
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
      />
      <TextContainer>
        <TitleText>{title}</TitleText>
        <DateText>Released {release_date}</DateText>
      </TextContainer>
    </CardContainer>
  );
};

export default MoviePoster;
