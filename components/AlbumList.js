import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import {  ActivityIndicator, Modal, TouchableOpacity, Text, Alert, View } from "react-native";


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
const [modalVisible, setModalVisible] = useState(false)

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
                 <View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                        }}>

                        <View>
                          <View>
                            <Text>{item.strAlbum}</Text>                   
                            <TouchableOpacity 
                                onPress={() => setModalVisible(!modalVisible)}
                              >
                              <Text>close</Text>
                            </TouchableOpacity>
                          </View>
                        </View>

                    </Modal>

                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <ImgAlbum
                        source={{ uri: item.strAlbumThumb }}
                      />
                    </TouchableOpacity>

                  </View> 
              )}

            />
          )}

      </Container>
      
    </>
  )
}

export default AlbumList
 
