import React from 'react'
import styled from 'styled-components/native'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import logo from './assets/logo.png'
import * as ImagePicker from 'expo-image-picker'
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
const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`
const Button = styled.TouchableOpacity`
  background-color: darkblue;
  padding: 20px;
  border-radius: 5px;
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
`


const App = () => {
  let [selectedImage, setSelectedImage] = React.useState(null)

  let openImagePickerAsync = async () => {
    let permissionResult = await
      ImagePicker.requestCameraRollPermissionsAsync()

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!")
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (pickerResult.cancelled === true) {
      return
    }
    setSelectedImage({ localUri: pickerResult.uri })
  }

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Oh no, sharing isn't available on your platform`)
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
        <Button onPress={openShareDialogAsync}>
          <ButtonText>Share this image</ButtonText>
        </Button>
      </ImageContainer>
    )
  }

  return (
    <Container>
      <View>
        <Logo source={logo} />
      </View>
      <Title>This is my first app!</Title>
      <Title>📷📷📷</Title>
      <Title>Share a photo with a friend, just press the button below!</Title>
      <Button onPress={openImagePickerAsync}>
        <ButtonText>Pick a photo</ButtonText>
      </Button>
    </Container>
  )
}

export default App
