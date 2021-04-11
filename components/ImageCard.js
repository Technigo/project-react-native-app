import React from 'react'
import styled from "styled-components/native";
import { Dimensions } from 'react-native'

const ArtImage = styled.Image`
  width: 100%;
  height: ${props => props.height / props.width * props.windowWidth}
  justify-content: center;
  align-items: center;
  `

const windowWidth = Dimensions.get('window').width

const ImageCard = ({webImage}) => {
  return (
    <ArtImage
        width={webImage.width} 
        height={webImage.height}
        windowWidth={windowWidth}
        resizeMode="contain"
        source={{
          uri: webImage.url,
        }} 
      />
  )
}

export default ImageCard