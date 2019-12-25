import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Image, View, Text, TouchableOpacity, Share, Button, ScrollView} from 'react-native'



const apiKey = `fc072b13-28ea-4264-a23b-cd3fd71d22bd`
const url = "https://api.thecatapi.com/v1/images/search?limit=10"

const Container = styled.View`
  flex:1;
  background-color: lightblue;
  justify-content: center;
`

const Title = styled.Text`
  background-color: midnightblue;
  color: lightblue; 
  border-radius: 10; 
  margin-top: 60;
  margin-bottom: 10; 
  margin-left: 20;
  margin-right: 20;
  padding: 20px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  text-align: center;
`


const App = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch(url, {headers: {Authorization: apiKey } })
    .then(res => res.json())
    .then(json => {
      setPhotos(json)
      console.log("json:")
      console.log(json)
    })
  }, [])

  const onShare = (photoUrl) => {
    console.log("onShare {photoUrl}"+photoUrl )
    try {
      const result = Share.share({
        message:
          'check this out! 😍',
          url: photoUrl
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed:'center'
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return(
    <Container>
      <Title>Make someone happy, share your favourite kitty.</Title>
      <ScrollView>
        {photos.map((photo) =>(
          <View key={photo.id}>
            <TouchableOpacity onPress={() => onShare(photo.url)}>
              <Image resizeMode='stretch'
              style={{flex:1, width: null, height: 300, marginLeft:20, marginRight:20, marginTop: 10, marginBottom: 10, borderRadius: 10}}
              source={{uri: photo.url}} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView> 
    </Container>
  )
  
}

export default App
