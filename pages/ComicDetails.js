import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { FULLCOMIC_URL } from "../reusables/urls";

const Wrapper = styled.View``;

const Title = styled.Text``;

export const ComicDetails = ({route}) => {
  const [comic, setComic] = useState();
  const {comicId} = route.params;
  
console.log(comicId)
  useEffect(() => {
    fetch(FULLCOMIC_URL(comicId))
      .then((res) => res.json())
      .then((comic) => setComic(comic.data.results[0]));
  }, [setComic, comicId]);

  return (
    <>
      {comic && (
        <Wrapper>
          <Title>{comic.title}</Title>
        </Wrapper>
      )}
    </>
  );
};
