import React from "react";
import styled from "styled-components/native";

const Poster = styled.View`
  background-color: red;
`;

const Text = styled.Text`
  border: 2px solid black;
`;

const MoviePoster = ({ title, poster_path }) => {
  return (
    <Poster>
      <Text>{title}</Text>
      {/* <img src={`https://image.tmdb.org/t/p/w342${poster_path}`} /> */}
    </Poster>
  );
};

export default MoviePoster;
