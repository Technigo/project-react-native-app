import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

import { SensorComponent } from './SensorComponent'


const EntryPage = ({navigation}) => {
  return (
    <View>
                <Text>Welcome to the Dice game</Text>
                <Text>Shake your phone to roll 6 dices</Text>
                <SensorComponent navigation={navigation}/>  
    </View>
  )
}

export default EntryPage