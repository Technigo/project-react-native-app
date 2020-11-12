import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";

const Container = styled.View`
  flex: 1;
`;

const SpaceImage = styled.Image`
  width: 450px;
  height: 900px;
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
        console.log(
          "json.collection.items[imgNumber].data[0].title",
          json.collection.items[imgNumber].data[0].title
        );
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
