import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function Header(props) {
  return (
    
    <View style={styles.container}>
           <Image
         style={{width: 355, height: 250}}
         source={{uri:`https://media.giphy.com/media/WNuF3KK9NaQ8w/giphy.gif`}}
         />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20

  } }
)