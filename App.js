import React, { useEffect, useState, Component } from "react";
import styled from "styled-components"
import { Image, View, Text, ScrollView } from 'react-native';

const apiKey = `563492ad6f917000010000016674d16c530e444482c459f1837b2a47`
const url = "https://api.pexels.com/v1/search?query=example+crossfit&per_page=66&page=1"

const App = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey } })
      .then(res => res.json())
      .then(json => {
        setPhotos(json.photos)
        console.log(json)
      })
  }, [])
     
  return(
      <Container><ScrollView>
        {photos.map((photo) => (
          <View key={photo.id}>
            <Text>Photo: {photo.photographer}</Text>
            <Image
            source={{uri: photo.src.original}}
            style={{width:300, height: 300}}
             />
        </View>
      ))}   
      </ScrollView></Container>
  )   
}

export default App

const Container = styled.View`
flex: 1;  
background-color: grey;
 
  align-items: center; 



  
  
 
`

// const Text = styled.Text`
//   color: white;
// `

// const Image = styled.Image`
//   height: 100%;
//   width:90%
// `