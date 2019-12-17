import React, { useEffect, useState } from "react";
import styled from "styled-components/native"
// import { View, Text } from 'react native'

const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+health&per_page=15&page=1"

const App = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
      })
  }, []);

  /*const App = () => {*/
  return (
    <Container>
      {/* return ( */}
      {/* {photos.map((photo) => (
        `<View key={photo.id}>{photo.photographer}</View>`
      ))} */}

      <Title>Petra, this is your cool app!</Title>
      <Title>Go to App.js and start coding</Title>
      <Title>💅💅💅</Title>
    </Container >
  )
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`
export default App
