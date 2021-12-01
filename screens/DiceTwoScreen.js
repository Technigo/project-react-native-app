import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
// import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import SensorComponent from '../components/SensorComponent'

const displayDice = (number) => {
  switch (number) {
    case '1':
      return 'dice-1'
    case '2':
      return 'dice-2'
    case '3':
      return 'dice-3'
    case '4':
      return 'dice-4'
    case '5':
      return 'dice-5'
    case '6':
      return 'dice-6'
    default:
      return 'dice-multiple'
  }
}

const rollDice = () => {
  // ending value: 6; starting value: 1
  return Math.floor(Math.random() * 6) + 1
}

const DiceTwoScreen = () => {
  const [diceNumber, setDiceNumber] = useState('')

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#006600', fontSize: 40 }}>DiceTwo Screen!</Text>
      {/* <Ionicons name='ios-videocam-outline' size={80} color='#006600' /> */}
      <MaterialCommunityIcons
        name={displayDice(diceNumber)}
        size={80}
        color='#006600'
      />
      <Button
        title='Roll Dice'
        onPress={() => setDiceNumber(rollDice().toString())}
      />
      <Text style={{ color: '#006600', fontSize: 16 }}>or try to shake</Text>
      <AntDesign name='shake' size={40} color='#006600' />
      {/* infinite loop when SensorComponent return boolean true, need to fix this! */}
      {<SensorComponent /> && <Text>Shaking</Text>}
    </View>
  )
}

export default DiceTwoScreen
