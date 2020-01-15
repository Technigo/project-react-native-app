import React, { useEffect } from "react"
import { Image, View, TouchableHighlight, FlatList } from "react-native"

import styled from "styled-components/native"

const Images = ({images,  selected, setSelected }) => {

  
  return (
    <ImageList
        data={images}
        renderItem={(image) => {
          return ( 
          <TouchableHighlight
          key={image.item.key}
          onPress={() => {
            setSelected(image.item.key)
            image.selected = true;
          }}
          >
            <Thumbnail
              source={{url: image.item.thumbnailUrl}}
              resizeMode="contain"
              style={image.item.selected && {display: "none" }}
            />
          </TouchableHighlight>
        )}}
        extraData={selected}
        // keyExtractor={thumbnails => thumbnails}
        numColumns={4}
        style={{flexGrow: 0}}
    />
  )
}

export default Images

const ImageList = styled.FlatList`
  background-color: gray;
  min-height: 400px;  
`

const Thumbnail = styled.Image`
  width: 100px;
  height: 100px;
`