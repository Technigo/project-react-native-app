import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import { SensorComponent } from './SensorComponent'

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFE489'
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#3d3d3d',
      margin: 5,
      textAlign: 'center'
  }
})

const EntryPage = ({navigation}) => {
  return (
    <View style={styles.container}>
                <Text style={styles.title}>Welcome to the Dice game</Text>
                <Text style={styles.title}>Shake your phone and let's roll!</Text>
                <SensorComponent navigation={navigation}/>  
    </View>
  )
}

export default EntryPage