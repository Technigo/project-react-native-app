import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

import { FULLCOMIC_URL } from "../reusables/urls";

export const ComicDetails = ({ route, navigation }) => {
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
            source={
              comic.images[0] && {
                uri: `${comic.images[0].path}/portrait_uncanny.jpg`,
              }
            }
          />
          <TextContainer>
            <Title>{comic.title}</Title>
            <DetailText>
              {comic.textObjects[0]
                ? comic.textObjects[0].text
                : "No description"}
            </DetailText>
          </TextContainer>
          <Button onPress={() => navigation.goBack()}>
            <ButtonText>Back</ButtonText>
          </Button>
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

const Button = styled.TouchableOpacity`
  height: 30px;
  width: 100px;
  background: black;
  border-color: red;
  border-style: solid;
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: red;
`;
