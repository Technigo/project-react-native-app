import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'


export const RandomCats = () => {
  const [randomCatImages, setRandomCatImages] = useState ([])

  const CAT_API = 'https://api.thecatapi.com/v1/images/search?api_key=ea0566f3-f5f8-4c25-af3c-bfb39b49849a'

    useEffect(() => {
      fetch (CAT_API)
        .then(res => res.json())
        .then(json => setRandomCatImages(json))
        console.log("hej")
        
    },[randomCatImages]) 


  return(
    <View>
      {randomCatImages.map(catImage => (
        <View key={catImage.id}>
        <Image source={{uri: catImage.url}}/>
        </View>
      ))}
      
      
      <Text>🐈</Text>
    </View>

  )
}

