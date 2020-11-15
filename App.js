import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as Sharing from 'expo-sharing'
import {Camera} from 'expo-camera'
import { Entypo } from '@expo/vector-icons';

import backgroundImage from './assets/banana.png';


const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`

const Title = styled.Text`
  font-size: 24px;
  color: #383E42;
  text-align: center;
  margin-bottom: 20px;
`

const ButtonPickImage = styled.TouchableOpacity`
  background-color: #383E42;
  padding: 20px;
  border-radius: 40px;
  border: red;
`

const ButtonShare = styled.TouchableOpacity`
  background-color: #383E42;
  padding: 20px;
  border-radius: 30px;
  border: red;
  margin-top: 20px;
`

const ButtonCamera = styled.TouchableOpacity`
  background-color: #383E42;
  padding: 40px;
  border-radius: 40px;
  border: red;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`

const ImageContainer = styled.View`
  flex: 1;
  background-color: #383E42;
  justify-content: center;
  align-items: center;
`

const PickedImage = styled.Image`
  width: 300px;
  height: 300px;
  border: white;
`


const CameraView = Camera

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back)
  const [startCamera,setStartCamera] = useState(false)
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [ previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)
 
 

  const start_Camera = async () => {
    const {status} = await 
    requestPermissionsAsync()         //if permissions
    console.log(status)
    if (status === 'granted') {
      setStartCamera(true)          // open camera
    } else {
      alert('Access denied')
    }
  }

  const takePictureAsync = async () => { 
    const { photo } = await 
    Permissions.askAsync(Permissions.Camera)
    if (status === "granted") {
      setrollPermission(stat === "granted");
    } else {
      /// Handle permissions denied;
      console.log("Uh oh! You need to grant permission.");
    }
    console.log(photo)
    setPreviewVisible(true)
    //setStartCamera(false)
    setCapturedImage(photo)
  }
   const savePhoto = () => {}
     const setakePicture = () => {
      setCapturedImage(null)
      setPreviewVisible(false)
       startCamera()
  }
    
    const openImagePickerAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await
          Permissions.askAsync(Permissions.CAMERA_ROLL)
          
  
        if (status !== "granted") {
          alert("Hey! Permission to enter camera roll?")
          return
        }
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync()
    console.log(pickerResult)

    if (pickerResult.cancelled === true) {
      return
    }
    setSelectedImage({ localUri: pickerResult.uri })
  }

  const openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Oops! Sharing isn't available on your platform")
      return
    }

    Sharing.shareAsync(selectedImage.localUri)
  }

  if (selectedImage !== null) {
    return (
      <ImageContainer>
        <CameraView />
        <PickedImage
          source={{ uri: selectedImage.localUri }}>
        </PickedImage>
        <ButtonShare onPress={openShareDialogAsync}>
          <ButtonText>Share</ButtonText>
        </ButtonShare>
      </ImageContainer>
    )
  }

  return (
    <Container source={backgroundImage}>
      <Title>Take a picture</Title>
      <ButtonCamera onPress={takePictureAsync}>
      </ButtonCamera>
      <Entypo name="camera" size={90} color="black" />    
      <Title>Share a picture</Title>
      <ButtonPickImage onPress={openImagePickerAsync}>
        <ButtonText>Cameraroll</ButtonText>
      </ButtonPickImage>
    </Container>
    
  )
}

export default App;