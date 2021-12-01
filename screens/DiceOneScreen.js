import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DiceOneScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#006600', fontSize: 40 }}>DiceOne Screen!</Text>
      {/* <Ionicons name='ios-images-outline' size={80} color='#006600' /> */}
      {/* <MaterialCommunityIcons
        name='dice-multiple-outline'
        size={24}
        color='#006600'
      /> */}
      <MaterialCommunityIcons name='dice-1' size={80} color='#006600' />
      <Button
        title='Roll Dice'
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  )
}

export default DiceOneScreen
