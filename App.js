import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Image, View, Text, TouchableOpacity, Share, Button, ScrollView} from 'react-native'
import { startAsync } from "expo/build/AR";
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";



const apiKey = `fc072b13-28ea-4264-a23b-cd3fd71d22bd`
const url = "https://api.thecatapi.com/v1/images/search?limit=10"

const Container = styled.View`
  flex:1;
  background-color: black;
  justify-content: center;
`

const Title = styled.Text`
  background-color: black;
  color: white;  
  margin-top: 60;
  margin-bottom: 10; 
  margin-left: 0;
  margin-right: 0;
  padding: 50px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  text-align: left;
  width: 300px;
`

const ImageCat = styled.Image`
 flex: 1;
 width: 100;
 height: 100;
 position: absolute;
 left: 270;
 top: 110;
`

const ImageCats = styled.Image`
flex:1;
width: null;
height: 300;
left: 0; 
right: 0; 
marginLeft:0; 
marginRight:0; 
marginTop: 10; 
marginBottom: 10;
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
          'Check this out! 😍',
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
      <ImageCat source={require('./cat.gif')}/>
      <ScrollView>
        {photos.map((photo) =>(
          <View key={photo.id}>
            <TouchableOpacity onPress={() => onShare(photo.url)}>
              <ImageCats resizeMode='stretch'
              source={{uri: photo.url}} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView> 
    </Container>
  )
  
}

export default App
