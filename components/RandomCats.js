import React, { useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  image: {
    width: 166,
    height: 158,
}})


export const RandomCats = () => {
  const [randomCatImages, setRandomCatImages] = useState ([])

  const CAT_API = 'https://api.thecatapi.com/v1/images/search?api_key=ea0566f3-f5f8-4c25-af3c-bfb39b49849a'

    useEffect(() => {
      fetch (CAT_API)
        .then(res => res.json())
        .then(json => setRandomCatImages(json))
      },[]) 


  return(
    <View>
      {randomCatImages.map(catImage => (
        <View key={catImage.id}>
          <Image style={styles.image} source={{uri: catImage.url}}/>
        </View>
      ))}
    </View>

  )
}

