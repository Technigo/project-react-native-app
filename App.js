import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 20px;
  color: palevioletred;
`

const ImageArt = styled.Image`
  width: 50px;
  height: 50px;
`

const App = () => {
  const ART_URL =
    "https://www.rijksmuseum.nl/api/en/collection?key=b5cLQ2UN&involvedMaker=Rembrandt+van+Rijn&ps=1";
  const [artList, setArtList] = useState();

  useEffect(() => {
    fetch(ART_URL)
      .then((response) => response.json())
      .then((json) => setArtList(json.artObjects[0]))
  }, [])

  

  return (
    <>
    {artList ? console.log(artList.webImage.url) : console.log('not ready')}
    {artList && (
    <Container>
      <Title>{artList.title}</Title>
      <ImageCard
        source={{
          uri: artList.webImage.url
        }} />
    </Container>
    )}
    </>
  );
};

export default App;

const ImageCard = styled.Image`
  width: 100%;
  height: 400px;
`