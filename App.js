import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, TouchableOpacity, Share, Image, ImageResizeMode } from 'react-native';
import Constants from 'expo-constants';

const apiKey = `95622557-9a41-47af-a755-23f39b9b9675`
const url = `https://api.thedogapi.com/v1/images/search`


//reusable fetch function

const fetchDog = () => {
  return fetch(url, { headers: { Authorization: apiKey} })
    .then((res) => res.json())
    .then((json) => {
      const dogsWithBreedInfo = json.filter((dog) => dog.breeds.length > 0)
      if (dogsWithBreedInfo.length > 0) {
        return dogsWithBreedInfo
      } else {
        return fetchDog()
      }
    })
}

const App = () => {
  const [photos, setPhotos] = useState([])

  const fetchDogPhotos = () => {
    fetchDog()
      .then((json) => {
        setPhotos(json)
        console.log(json)
      })
  }

  useEffect(() => {
    fetchDogPhotos()
  }, [])


  return(
    <Container>
    <TouchableOpacity onPress={fetchDogPhotos}> 
     <ViewDog>
        {photos.map((photo) => (
          <ViewInfo key={photo.id}>
          <Image
            resizeMode="contain"
            source={{uri: photo.url}}
            style={{width: 300, height: 600}} 
            />  
          <TextName>{photo.breeds[0].name}</TextName>
          <TextTemperament>{photo.breeds[0].temperament}</TextTemperament>   
          <TextNewDog>Tap the screen for new dog</TextNewDog>
         </ViewInfo>
        ))}
     </ViewDog> 
     </TouchableOpacity>    
   </Container>
   );
 }

export default App

const Container = styled.View`
 background-color: #171717;
 flex: 1;
 justify-content: center;
 align-items: center;
`

const ViewInfo = styled.View`
 background-color: #171717;
 justify-content: center;
 align-items: center;
`

const ViewDog = styled.View`
 background-color: #171717;
 flex: 1;
 justify-content: center;
 align-items: center;
`

const TextName = styled.Text`
 color: white;
 position: absolute;
 font-size: 16px;
 font-weight: bold;
 position: absolute;
 top: 30px;
`

const TextTemperament = styled.Text`
 color: white;
 font-size: 16px;
 position: absolute;
 top: 60px;
 background-color: #171717;
`

const TextNewDog = styled.Text`
 position: absolute;
 bottom: 40px;
 width: 70%;
 background-color: white;
 padding: 5px;
 border-radius: 5px;
 font-size: 16px;
 color: black;
`