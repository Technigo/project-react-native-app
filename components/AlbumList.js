import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Text, View, Image } from "react-native";


const Container = styled.ScrollView`
  /*flex: 1;*/
  /*background-color: papayawhip; */
   /* justify-content: center; */
`

const AlbumWrapper = styled.View`
  
`

const Title = styled.Text`
  font-size: 50px;
  color: palevioletred;
`

const AlbumList = () => {

const albumUrl = 'https://theaudiodb.com/api/v1/json/1/album.php?i=112024'

const [albums, SetAlbums] = useState([])

useEffect(() => {
  fetch(albumUrl)
  .then(response => response.json())
  .then(json => SetAlbums(json.album))
},[])
  
  return (
    <>
      <Container>
        <Title>The Weeknd App</Title>
        {albums.map((album) => (
          <AlbumWrapper key={album.idAlbum}>
            <View>
              <Image 
                  source={{ uri: album.strAlbumThumb }}
                  style={{ width: 350, height: 350 }} 
                  //PlaceholderContent={<ActivityIndicator />}
              />
            </View>
            <View>
              <Text>{album.strAlbum}</Text>
            </View>
          </AlbumWrapper>
        ))}
      </Container>
      
    </>
  )
}

export default AlbumList
 

