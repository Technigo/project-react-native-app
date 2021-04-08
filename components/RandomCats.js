import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text } from 'react-native'


const CatImage = styled.Image`
width: 260px;
height: 250px;
margin-top: 30px;
`
const RandomButton = styled.TouchableOpacity`
background-color: #aaaaee;
padding: 15px;
border-radius: 3px;
align-items: center;
margin-top: 30px;
`
const ButtonText = styled.Text`
font-size: 16px;
`



export const RandomCats = () => {
  const [randomCatImages, setRandomCatImages] = useState ([])

  const CAT_API = 'https://api.thecatapi.com/v1/images/search?api_key=ea0566f3-f5f8-4c25-af3c-bfb39b49849a'

  useEffect(() => {
    fetch (CAT_API)
      .then(res => res.json())
      .then(json => setRandomCatImages(json))
    },[]) 
    

    const updateRandomCat = () => {
      
     
        fetch (CAT_API)
          .then(res => res.json())
          .then(json => setRandomCatImages(json))
    }

  return(
    <View>
      {randomCatImages.map(catImage => (
        <View key={catImage.id}>
          <CatImage source={{uri: catImage.url}}/>
          <RandomButton onPress={updateRandomCat}>
          <ButtonText>Press for random kitty 🐾</ButtonText>
        </RandomButton>
        </View>
      ))}
    </View>

  )
}

