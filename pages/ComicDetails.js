import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { FULLCOMIC_URL } from "../reusables/urls";
import { ComicsList } from "./ComicsList";


export const ComicDetails = ({ route }) => {
  const [comic, setComic] = useState();
  const { id } = route.params;

  useEffect(() => {
    fetch(FULLCOMIC_URL(id))
      .then((res) => res.json())
      .then((comic) => setComic(comic.data.results[0]));
  }, [setComic, id]);

  return (
    <>
      {comic && (
        <Wrapper>
          <Image
            source={comic.images[0] && { uri: `${comic.images[0].path}/portrait_uncanny.jpg` }}
          />
          <TextContainer>
            <Title>{comic.title}</Title>
            <DetailText>
              {comic.textObjects[0]
                ? comic.textObjects[0].text
                : "No description"}
            </DetailText>
          </TextContainer>
        </Wrapper>
      )}
    </>
  );
};


const Wrapper = styled.View`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Image = styled.Image`
  flex: 1 1 auto;
  margin: 20px;
`;

const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 20px;
`;

const DetailText = styled.Text``;
