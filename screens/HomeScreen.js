import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: pink;
  align-items: center;
`;

const SpaceImage = styled.Image`
  height: 300px;
  width: 300px;
`;

const page = 2;

const StartPage = ({ imgNumber, query }) => {
  const [galaxies, setGalaxies] = useState();

  const GALAXY_URL = `https://images-api.nasa.gov/search?description=${query}&media_type=image&page=${page}`;

  useEffect(() => {
    fetch(GALAXY_URL)
      .then((res) => res.json())
      .then((json) => {
        setGalaxies(json.collection.items);
        console.log("json.collection.items", json.collection.items);
        console.log("json", json);
      });
  }, [GALAXY_URL]);

  if (galaxies) {
    const galaxyImageLink = galaxies[imgNumber].links[0].href;
    console.log("galaxyImageLink", galaxyImageLink);

    return (
      <Container>
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
