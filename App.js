import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import ImageCard from './components/ImageCard'

const Container = styled.ScrollView`
  background-color: black;
  flex: 1;
`

const Title = styled.Text`
  font-size: 20px;
  color: palevioletred;
  flex: 1;
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
    {artList && ( 
    <Container>
    {artList.map((artItem) =>  (
      <ImageCard {...artItem} key={artItem.id} />
     ))}
     </Container>
    )}
   </>
   
  );
};

export default App;