import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";

// styled components:

const TitleContainer = styled.View`
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0);
`;

const Title = styled.Text`
  width: 80%;
  text-align: center;
  font-size: 30px;
  padding: 60px 0 0 0;
  color: #fff;
`;

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const SpaceImage = styled.Image`
  width: 100%;
  height: 100%;
`;

// Home screen page:

const StartPage = ({ imgNumber, query, setImgNumber, random }) => {
  const [galaxies, setGalaxies] = useState();

  const GALAXY_URL = `https://images-api.nasa.gov/search?description=${query}&media_type=image`;

  useEffect(() => {
    fetch(GALAXY_URL)
      .then((res) => res.json())
      .then((json) => {
        setGalaxies(json.collection.items);
        setImgNumber(random(100)); // to not show same image number again when changing query
      });
  }, [GALAXY_URL]);

  if (galaxies) {
    const galaxyImageLink = galaxies[imgNumber].links[0].href;
    const galaxyImageTitle = galaxies[imgNumber].data[0].title;

    return (
      <Container>
        <TitleContainer>
          <Title>{galaxyImageTitle}</Title>
        </TitleContainer>
        <SpaceImage
          source={{
            uri: galaxyImageLink,
          }}
        />
      </Container>
    );
  } else {
    return (
      <Container>
        <Text>Loading</Text>
      </Container>
    );
  }
};

export default StartPage;
