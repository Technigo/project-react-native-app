import React, { useState } from 'react'
import { Button, View, Pressable, StyleSheet, Text } from 'react-native'
import styled from 'styled-components/native'

import ShareButton from '../components/ShareButton'

import OpenURLButton from '../components/OpenURLButton'

import ModalComponent from '../components/ModalComponent'


import Loader from '../components/Loader'

import { RandomCatGifAPI } from '../utils/URLs'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CatImage = styled.Image`
  width: 100%;
  height: 375px;
`

// This is the main container for this screen
// const FeedContainer = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `

const Container = styled.View`
	flex: 1;
	/* background-color: papayawhip; */
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 24px;
	color: black;
`

const CatGifButton = () => {

  const [modalVisible, setModalVisible] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const [catGifURL, setCatGifURL] = useState('')

  const generateCatGif = () => {
    setModalVisible(true)
    setIsLoading(true)
    fetch(RandomCatGifAPI, {
      method: "GET",
      headers: {
        "x-api-key": "6a245bef-34b3-42f8-8457-d697e7a835bf"
      }
    })
      .then(res => res.json())
      .then(data => {
        setCatGifURL(data[0].url)
        setIsLoading(false)
      })
  }


  // if (isLoading) {
  //   return <Loader isLoading={isLoading} />
  // }

  const startOver = () => {
    console.log(catGifURL)
    setCatGifURL('')
    setModalVisible(!modalVisible)
  }



  return (
    isLoading ? <Loader isLoading={isLoading} /> : (
      <Container>
        <ModalComponent startOver={startOver} setModalVisible={setModalVisible} modalVisible={modalVisible} shareURL={catGifURL} shareText={`Look at this cat gif!`} shareTitle={`Share this cat gif`} />

        <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={generateCatGif}
            >
              <Text style={styles.textStyle}>Generate a cat gif</Text>
            </Pressable>

        {/* <Button title={catGifURL === '' ? 'Generate a cat gif' : 'Generate another cat gif'} onPress={generateCatGif} /> */}
        {/* <View>
        <TouchableOpacity onPress={generateCatGif}><Text>{catGifURL === '' ? 'Generate a cat gif' : 'Generate another cat gif'}</Text></TouchableOpacity>
      </View> */}
        {/* {catGifURL !== '' && (
        <>
          <CatImage source={{ uri: catGifURL }} />
          <ShareButton shareURL={catGifURL} shareText={`Look at this cat gif!`} shareTitle={`Share this cat gif`} />
        </>
      )} */}
      </Container>
    )
  )
}


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})


export default CatGifButton
