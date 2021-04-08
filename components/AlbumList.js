import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {  ActivityIndicator } from "react-native";


const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: black;
`

const Title = styled.Text`
  font-size: 50px;
  color: palevioletred;
  margin-top: 15px;
`
const ImgAlbum = styled.Image`
  width: 360;
  height: 360; 
  border: 5px solid black;
  
  resize-mode: cover;
`
const List = styled.FlatList`
  background-color: black;
`


const AlbumList = () => {

const albumUrl = 'https://theaudiodb.com/api/v1/json/1/album.php?i=112024'

const [isLoading, setLoading] = useState(true)
const [data, setData] = useState([])

useEffect(() => {
  fetch(albumUrl)
  .then(response => response.json())
  .then(json => setData(json.album))
  .catch(error => error)
  .finally(() => setLoading(false))
},[])
  
  return (
    <>
       <Container>
       <Title>The Weeknd App</Title>
        {isLoading ? <ActivityIndicator/> : (
          <List 
            data={data}
            keyExtractor={( {id}, index) => id}
            renderItem={ ({item}) => (
              <ImgAlbum
                 source={{ uri: item.strAlbumThumb }}
                 alt={item.strAlbum}
              />
            )}

          />
        )}

       </Container>
      
    </>
  )
}

export default AlbumList
 

// const Container = styled.ScrollView`
//   /*flex: 1;*/
//   /*background-color: papayawhip; */
//    /* justify-content: center; */
// `

// const AlbumWrapper = styled.View` 
// `

{/* <Container>
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
      </Container> */}