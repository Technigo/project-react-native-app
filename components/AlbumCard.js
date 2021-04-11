import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {  ActivityIndicator, TouchableOpacity, Alert } from "react-native";

const ImgAlbum = styled.Image`
  width: 360;
  height: 360; 
  border: 5px solid black;
  
  resize-mode: cover;
`

const AlbumCard = (props) => {

  const onPressImage = () => {
    Alert.alert(
      `${props.albumName}, Released: ${props.releaseYear}`,
      `${props.moreInfo}`,
      [
        { text: 'Go back to albums'}
      ]
    )
  }


  return (

    <TouchableOpacity onPress={onPressImage}>
      <ImgAlbum
        source={{ uri: props.image }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
  )
}

export default AlbumCard