import React from 'react'
import styled from 'styled-components/native'
import {Image, TouchableOpacity, Text, Status, View} from "react-native"
import logo from "./assets/logo.png"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"


const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
 
  async function alertIfRemoteNotificationsDisabledAsync() {
    const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Hey! Please give this innocent app permission to go through all your pics.');
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  

  return (
    <Container>
      <Image source={logo}/>
      <Title>      
        <Text>To share a photo from your phone with a friend, just press the button below!
        </Text>
      </Title>
      <TouchableOpacity
      onPress={alertIfRemoteNotificationsDisabledAsync}>
        <Text>Pick A Picture!</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default App


