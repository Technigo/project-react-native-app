import React, { useState } from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import styled from 'styled-components/native'

import ShareButton from '../components/ShareButton'

import OpenURLButton from '../components/OpenURLButton'

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

const CatButtonGif = () => {

  const [isLoading, setIsLoading] = useState(false)

  const [catGifURL, setCatGifURL] = useState('')

  const generateCatGif = () => {
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


  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }


  return (
    <Container>
      <Button title={catGifURL === '' ? 'Generate a cat gif' : 'Generate another cat gif'} onPress={generateCatGif} />
      {/* <View>
        <TouchableOpacity onPress={generateCatGif}><Text>{catGifURL === '' ? 'Generate a cat gif' : 'Generate another cat gif'}</Text></TouchableOpacity>
      </View> */}
      {catGifURL !== '' && (
        <>
          <CatImage source={{ uri: catGifURL }} />
          <ShareButton shareURL={catGifURL} shareText={`Look at this cat gif!`} shareTitle={`Share this cat gif`} />
        </>
      )}
    </Container>
  )
}

export default CatButtonGif
