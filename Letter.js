import React from 'react'
import { useState } from 'react'
import { Text, View, Button } from 'react-native'


export const Alfabet = () => {

  const Letter = [
    {
      "letter": "A"
    },
    {
      "letter": "B"
    },
    {
      "letter": "C"
    },
    {
      "letter": "D"
    },
    {
      "letter": "E"
    },
    {
      "letter": "F"
    },
    {
      "letter": "G"
    },
    {
      "letter": "H"
    },
    {
      "letter": "I"
    },
    {
      "letter": "J"
    },
    {
      "letter": "K"
    },
    {
      "letter": "L"
    },
    {
      "letter": "M"
    },
    {
      "letter": "N"
    },
    {
      "letter": "O"
    },
    {
      "letter": "P"
    },
    {
      "letter": "Q"
    },
    {
      "letter": "R"
    },
    {
      "letter": "S"
    },
    {
      "letter": "T"
    },
    {
      "letter": "U"
    },
    {
      "letter": "V"
    },
    {
      "letter": "X"
    },
    {
      "letter": "Y"
    },
    {
      "letter": "Z"
    },
    {
      "letter": "Å"
    },
    {
      "letter": "Ä"
    },
    {
      "letter": "Ö"
    }
  ]

  const [letter, setLetter] = useState({})

  const getLetter = () => {
    const theLetter = Letter[Math.floor(Math.random() * Letter.length)]
    setLetter(theLetter)
  }

  return (
    <View>
        <Text>
          {letter.letter}
        </Text>
      <Button onPress={() => { getLetter();}}>
        <Text>Herthas alfabet</Text>
      </Button>
    </View>
  )
}