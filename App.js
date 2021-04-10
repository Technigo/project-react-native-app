import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  background-color: papayawhip;
  flex: 1;
`

const Title = styled.Text`
  font-size: 20px;
  color: palevioletred;
  flex: 1;
`

const ImageCard = styled.Image`
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center
  `

const App = () => {
  const ART_URL =
    "https://www.rijksmuseum.nl/api/en/collection?key=b5cLQ2UN&involvedMaker=Rembrandt+van+Rijn&ps=5";
  const [artList, setArtList] = useState();

  useEffect(() => {
    fetch(ART_URL)
      .then((response) => response.json())
      .then((json) => setArtList(json.artObjects))
  }, [])

  return (
    <>
    {artList ? console.log(artList[0].title) : console.log('not ready')}
    
    {artList && ( 
    <Container>
    {artList.map((artItem) =>  (
      <ImageCard
        source={{
          uri: artItem.webImage.url,
        }} />

     ))}
     </Container>
    )}
   </>
   
  );
};

export default App;