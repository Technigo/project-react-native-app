import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import logo from './assets/logo.png'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import * as Sharing from 'expo-sharing'

const Container = styled.View`
  flex: 1;
  background-color: lightblue;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 24px;
  color: #888;
  text-align: center;
  margin-bottom: 20px;
`
const TitleCameraIcon = styled.Text`
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
`
const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`
const ButtonPickImage = styled.TouchableOpacity`
  background-color: darkblue;
  padding: 20px;
  border-radius: 5px;
`
const ButtonShare = styled.TouchableOpacity`
  background-color: darkblue;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
`
const ButtonText = styled.Text`
  font-size: 20px;
  color: white;
`
const ImageContainer = styled.View`
  flex: 1;
  background-color: lightblue;
  justify-content: center;
  align-items: center;
`
const PickedImage = styled.Image`
  width: 300px;
  height: 300px;
  border: 2px solid white;
`

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openImagePickerAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await
        Permissions.askAsync(Permissions.CAMERA_ROLL)

      if (status !== "granted") {
        alert("Hey! Permission to camera roll is required to make this work.")
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
      alert("Oh no, sharing isn't available on your platform")
      return
    }

    Sharing.shareAsync(selectedImage.localUri)
  }

  if (selectedImage !== null) {
    return (
      <ImageContainer>
        <PickedImage
          source={{ uri: selectedImage.localUri }}>
        </PickedImage>
        <ButtonShare onPress={openShareDialogAsync}>
          <ButtonText>Share this image</ButtonText>
        </ButtonShare>
      </ImageContainer>
    )
  }

  return (
    <Container>
      <View>
        <Logo source={logo} />
      </View>
      <Title>Let's share some pics!</Title>
      <TitleCameraIcon>📷📷📷</TitleCameraIcon>
      <Title>Share a photo with a friend, just press the button below!</Title>
      <ButtonPickImage onPress={openImagePickerAsync}>
        <ButtonText>Pick a photo</ButtonText>
      </ButtonPickImage>
    </Container>
  )
}

export default App
