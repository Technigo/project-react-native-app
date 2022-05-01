import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native';
import { View, StyleSheet, Text, Image } from 'react-native'
import ArtFetch from './ArtFetch';



const Start = () => {
    
  return(
<View style={styles.main}>
    <View style={styles.container}>
   
    <Text style={styles.header}>/ Shake for fun /</Text>
    <ArtFetch />
  
    </View>
    </View>
  )
  }

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
container: {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 40,
  marginTop: 25,
  alignItems: 'center',
  width: 340,
  height: 420,
  borderWidth: 3,
  borderColor: 'black',
  borderRadius: 10,
  
  backgroundColor: 'yellow',
 
},

  header: {
    fontFamily: 'Optima-Italic',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 65,
    color: 'tomato',

  },

})

export default Start