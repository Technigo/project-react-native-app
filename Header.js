import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function Header (props) {


  return (
    <View style={styles.container}>
      <Text style={styles.titel}> {props.title} </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    height: 100, 
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCED84",
    
  },
  titel: {
    fontSize: 50,
    //paddingBottom: 300,
  }
})