import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { COMICS_URL } from "../reusables/urls";
import { ComicCard } from "../components/ComicCard";

const Scroll = styled.ScrollView``;

const Wrapper = styled.View`
  background-color: black;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 24px;
  padding: 10px;
  text-align: center;
  background-color: black;
  margin: 0;
`;

export const ComicsList = ({ navigation, comicsId, setComicsId }) => {
  const [comicList, setComicList] = useState([]);

  useEffect(() => {
    fetch(COMICS_URL)
      .then((res) => res.json())
      .then((comics) => setComicList(comics.data.results));
  }, []);

  return (
    <Scroll>
      <Title>MARVEL</Title>
      <Wrapper>
        {comicList.map((comic) => (
          <ComicCard
            setComicsId={setComicsId}
            comicsId={comicsId}
            navigation={navigation}
            {...comic}
            key={comic.id}
            path={comic.images[0].path}
          />
        ))}
      </Wrapper>
    </Scroll>
  );
};
