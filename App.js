import React, { useEffect, useState, Component } from "react";
import Header from "./components/Header"
// import Button from "./components/Button"
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
         <Header title='Time to get CrossFit inspired' />
         {/* <Button /> */}
        {photos.map((photo) => (
          <View key={photo.id}>
           
            <Text>Photo: {photo.photographer}</Text>
            <Image
            source={{uri: photo.src.small}}
            style={{width:130, height: 130}}
             />
        </View>
         
      ))}   
      </ScrollView></Container>
  )   
}



const Container = styled.SafeAreaView`
  flex: 1;  
  background-color: grey; 
  align-items: center; 
  justify-content: space-between;
`


export default App
