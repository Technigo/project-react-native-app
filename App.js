import React, { useState } from 'react'
import styled from 'styled-components/native'
import {Image, Platform, TouchableOpacity, Text, View} from "react-native"
import logo from "./assets/logo.png"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"
import * as Sharing from "expo-sharing"
import uploadToAnonymousFilesAsync from "anonymous-files"
import { SplashScreen } from 'expo';


const Container = styled.View`
  flex: 1;
  background-color:#e1f4fe;
  justify-content: center;
  align-items: center;
  padding: 25px;
`
const SelectedPic = styled.Image`
width:300px;
height:300px;
display: flex;
align-self:center;
`

const Title = styled.Text`
  font-size: 24px;
  color:#ff0f47;
`
const Buttonish = styled.Text`
  font-size: 24px;
  border: solid black 1px
  margin:10px;
  padding:4px;
  border-radius:4px;
  background-color: #e1f4fe;
`
const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  async function moodyfunctionofpermission() {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Hey! Please give this innocent app permission to go through all your pics.');
    }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
    return;
  }

  if (Platform.OS === 'web') {
    let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
    setSelectedImage({ localUri: pickerResult.uri, remoteUri });
  } else {
    setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
  } 

setSelectedImage ({ localUri: pickerResult.uri});
};
  
let openSharedDialogAsync = async () =>{
  if (!(await Sharing.isAvailableAsync())) {
    alert(`The image is available for sharing at: ${"www.facebook.com"}`);
    return;
  }
Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri)
}

if (selectedImage !== null) {
  return (
    <Container >
      <SelectedPic source={{ uri: selectedImage.localUri }}/>
      <Buttonish onPress={openSharedDialogAsync}>
        Share the pretty picture!
      </Buttonish>
    </Container>
  );
}

  return (
    <Container>
      <Image source={logo}/>
      <Title>      
        <Text>To share a photo from your phone with a friend, just press the button below!
        </Text>
      </Title>
      <TouchableOpacity
        onPress={moodyfunctionofpermission}>
        <Buttonish>Pick A Picture!</Buttonish>
      </TouchableOpacity>
    </Container>
  )
}

export default App


