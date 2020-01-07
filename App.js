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
      <View>
         {photos.map((photo) => (
           <View key={photo.id}>
           {/*<Text>{photo.breeds[0].name}</Text> //dont work for all apis*/}
           <Image
             resizeMode="contain"
             source={{uri: photo.url}}
             style={{width: 300, height: 600}} 
             /> 
           <Text>Tap the screen for new dog</Text>
          </View>
         ))}
      </View> 
      </TouchableOpacity>    
    </Container>
    );
  }

export default App

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`

const Button = styled.TouchableOpacity`
  background: #80ff86;
  position: absolute;
  bottom: 40;
  padding: 10px 20px;
  border-radius: 20px;
`
const ButtonText = styled.Text`
  flex:1;
  align-items: center;
  color: #1f2e1f;
  font-size: 20;
`