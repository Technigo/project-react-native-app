
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import ImageCard from "./ImageCard";

const Container = styled.ScrollView`
  background-color: black;
  flex: 1;
`;

const HomeScreen = ( { navigation: { navigate } } ) => {

  const ART_URL =
    "https://www.rijksmuseum.nl/api/en/collection?key=b5cLQ2UN&involvedMaker=Rembrandt+van+Rijn&ps=5";
  const [artList, setArtList] = useState();

  useEffect(() => {
    fetch(ART_URL)
      .then((response) => response.json())
      .then((json) => setArtList(json.artObjects));
  }, []);


  return (
    <>
    {artList && (
      <Container>
        {artList.map((artItem) => (
          <TouchableOpacity onPress={() => navigate('Details', {
            objectNumber: artItem.objectNumber
            }
          )} key={artItem.id} >
          <ImageCard {...artItem} />
          </TouchableOpacity>
        ))}
      </Container>
    )}
    </>
  )

}

export default HomeScreen;