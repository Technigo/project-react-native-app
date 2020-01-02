import React, { useEffect, useState, Component } from "react";
import Header from "./components/Header"
// import Button from "./components/Button"
import styled from "styled-components"
import { Image, View, TouchableOpacity, Text, Title, ScrollView, Linking } from 'react-native';


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

  const getSelectedImageUrl = (photoId) => {
    const photo = photos.find((p) => p.id === photoId)
    return Linking.openURL(photo.photographer_url)
  }
  
  return(
    <Container><ScrollView>
      <Header title='Rx CrossFit Snaps' />
      {photos.map((photo) => (
        <View key={photo.id}>
          <Button onPress={() => getSelectedImageUrl(photo.id)}>
            <Image
              source={{uri: photo.src.original}}
              style={{width:400, height:300, marginVertical: 10, }}
            />
          </Button>
          <Text
            style={{color:'white', }}>Photo: {photo.photographer}
          </Text>
        </View>
      ))
      }   
    </ScrollView></Container >
  )  
}

export default App

const Button = styled.TouchableOpacity`
  width: 400;
  height: 300;
  background-color: black;
  margin-bottom: 20;
  border-radius: 5;

` 

const Container = styled.View`
  flex: 1;  
  background-color: black; 
  justifyContent: space-between; 
  alignContent: center;
  paddingHorizontal: 20;
  paddingVertical: 20;
  flexWrap: wrap;
    
`

 



