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
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const SelectedPic = styled.Image`
width:300px;
height:300px;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
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
    <View >
      <SelectedPic source={{ uri: selectedImage.localUri }}/>
      <TouchableOpacity onPress={openSharedDialogAsync}>
        <Text>Share the pretty picture!</Text>
      </TouchableOpacity>
    </View>

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
        <Text>Pick A Picture!</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default App


