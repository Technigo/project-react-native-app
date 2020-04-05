import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Header = (props) => {
  return(
    <View style={styles.header}>
     <Text style={styles.title}>{props.title}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
  backgroundColor:'yellow',
  height:60,
  justifyContent:'center',
  alignItems:'center'
},
title:{
  color:'blue',
  fontSize: 28,
  fontWeight:'900',
  textTransform:'uppercase'
}
})
export default Header