import React, { useEffect } from "react"
import { Image, View } from "react-native"

import styled from "styled-components/native"

const FLICKR_IMAGE_URL = "https://www.flickr.com/photos/"; // append with "userid/imageid"

const Images = ({thumbnails,  selected, setSelected }) => {


  // console.log(thumbnails + "hej")
  return (
    <Container>
      {thumbnails.map((url, index) => {
        console.log(url)
        return (
          <Thumbnail
            source={{url: url}}
            key={url}
            resizeMode="contain"
          />
        )
      })}
      
    </Container>
  )
}

export default Images

const Container = styled.View`
  background-color: gray;
  justify-content: center;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
  flex-direction: row;
  
`
const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const Thumbnail = styled.Image`
  width: 100px;
  height: 100px;
`