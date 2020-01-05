import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';


//api and key

const apiKey = `95622557-9a41-47af-a755-23f39b9b9675`
const url = `https://api.thedogapi.com/v1/images/search`


//fetching json

const App = () => { 
  const [photos, setPhotos] = useState ([])
    useEffect(() => {
    fetch(url, { headers: { Authorization: apiKey} })
      .then(res => res.json())
      .then(json => {
      setPhotos(json)
        console.log(json)
  })
  }, [])

    const onPress = (photo) => {
    console.log('click click', photo.url)
  }

    return(
        <Container>
            <View>
             {photos.map((photo) => (

             <View key={photo.id}> 
             <Image
               source={{uri: photo.url}}
               style={{width: 300, height: 600, resizeMode: "contain"}} 
              />
           </View>
         ))}

            <TouchableOpacity onPress={(photo) => onPress(photo)}> 
              <Text>New dog</Text>
            </TouchableOpacity> 
        </View>  
      </Container>
    );
  }

  export default App


  const Button = styled.TouchableOpacity`
    width: 200;
    position: absolute;
    border-radius: 5%;
    margin-bottom: 200px;`

  const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  padding_top: 200;
  padding_bottom: 200;
  `
  const Label = styled.View`
  color: white;`