import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native';
import { View, StyleSheet, Text, Image } from 'react-native'

import { MEME_API, TEST_API, JOKES_API } from './url/urls';

const ArtFetch = () => {
  const [art, setArt] = useState({})

const getArt = () => {
    fetch(JOKES_API)
    .then(res => res.json())
    .then(data => setArt(data))
   
}

useEffect(() => {
  getArt()
}, [])

 
  return(
    <View style={styles.container}>
    <View style={styles.textContainer}>
    <Text style={styles.jokeText}>{art.setup}</Text>
    <Text style={styles.deliveryText}>{art.delivery}</Text>
    </View>
    

    </View>
  )
  }

const styles = StyleSheet.create({
container: {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  width: 250,
  height: 140,
  borderLeftWidth: 2,
},
textContainer: {
marginTop: 28,

},

jokeText: {
  fontFamily: 'GillSans-SemiBold',
  fontSize: 16,
  marginBottom: 10,
  paddingLeft: 10,
},
deliveryText: {
  paddingLeft: 10,
  fontFamily: 'Optima-Italic',
  fontSize: 16,
},


  image: {
width: 300,
height: 'auto',
  }

})

export default ArtFetch