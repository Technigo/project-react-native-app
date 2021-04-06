import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import MoviePoster from "./components/MoviePoster";

const Container = styled.View``;

const App = () => {
  const [fetchMovieList, setFetchMovieList] = useState([]);

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=bf14fff1c40836226439b742bbbb7950";

  https: useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setFetchMovieList(json.results);
      });
  }, []);

  console.log(fetchMovieList);

  return (
    <Container>
      {fetchMovieList.map((movie) => (
        <MoviePoster {...movie} key={movie.id} />
      ))}
    </Container>
  );
};

export default App;
