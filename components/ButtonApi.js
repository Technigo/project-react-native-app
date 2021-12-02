import React from 'react'
import { View, Text, Button } from 'react-native'

const ButtonApi = () => {
  return (
    <View>
      <Text>Click button to see popular movies</Text>
      <ButtonApi title="Click!" onPress={() => console.log('clicked')} />
    </View>
  )
}

export default ButtonApi