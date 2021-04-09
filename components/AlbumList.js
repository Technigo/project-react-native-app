import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {  ActivityIndicator, TouchableOpacity, Text, Alert, View } from "react-native";

import AlbumCard from './AlbumCard'

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
              //keyExtractor={( {id}) => id}
              renderItem={ ({item}) => (
                 <View key={item.idAlbum}>            
                    <AlbumCard 
                      image={item.strAlbumThumb}
                      albumName={item.strAlbum}
                      releaseYear={item.intYearReleased}
                      
                    />                  
                  </View> 
              )}
            />
          )}
      </Container>
      
    </>
  )
}

export default AlbumList
 
