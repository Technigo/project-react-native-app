import React, { useEffect, useState, Component } from "react";
import Header from "./components/Header"
// import Button from "./components/Button"
import styled from "styled-components"
import { Image, Alert, View, TouchableOpacity, Text, Title, ScrollView } from 'react-native';


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

  // const onPress = (photo) => {
  //   console.log('click click', photo.id)
  // }
  
  return(
      <Container><ScrollView>
         <Header title='Time to get CrossFit inspired' />
        {photos.map((photo) => (
          <View key={photo.id}>
            <Image
            source={{uri: photo.src.original}}
            style={{width:300, height:300, marginVertical: 30, }}
             />
             <Button onPress={photo.photographer_url} >
                <Text
                style={{color:'white', }}>
                  Photo: {photo.photographer}</Text>
                </Button>
        </View>
      ))}   
      </ScrollView></Container>
  )  
}


export default App

const Button = styled.TouchableOpacity`
  width: 150;
  height: 30;
  background-color: black;
  margin-bottom: 20;
  border-radius: 5;

` 

const Container = styled.View`
    
  background-color: black; 
  justify-content: space-between; 
  align-items: center;
  paddingHorizontal: 80;
  paddingVertical: 20;
  flexWrap: wrap;
  flexDirection: row;
  
`

 



