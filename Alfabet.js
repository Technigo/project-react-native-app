import React from 'react'
import { useState } from 'react'
import { Text, View, Button, Vibration } from 'react-native'




export const Alfabet = ({ letterArray }) => {

  const [letter, setLetter] = useState([])
  
  const getLetter = () => {
    const theLetter = letterArray[Math.floor(Math.random() * letterArray.length)]
    setLetter(theLetter)
  }
 
  return (
    <View>
        <Text>
          {letter.letter}
        </Text>
      <Button onPress={() => { getLetter(); Vibration.vibrate()}}>
        <Text>Herthas alfabet</Text>
      </Button>
    </View>
  )
};