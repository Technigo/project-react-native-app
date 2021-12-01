import React from 'react'
import { Text, View } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#006600', fontSize: 40 }}>Roll Dice!</Text>
      <Text style={{ color: '#006600', fontSize: 20 }}>
        Choose between Fun Chores or Boring Numbers
      </Text>
      {/* <Ionicons name='ios-person-circle-outline' size={80} color='#006600' /> */}
      <FontAwesome5 name='hand-point-up' size={80} color='#006600' />
    </View>
  )
}

export default HomeScreen
