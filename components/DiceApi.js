import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native-web'
import styled from 'styled-components/native'

const APIButton = styled.TouchableOpacity`
font-weight: 700; 
width: 50%;
background-color: tomato;
`

const DiceApi = () => {

    const [roll, setRoll] = useState([])

    const generateDice = () => {
        fetch("https://rolz.org/api/?d6.json")
        .then(res => res.json())
        .then(roll => setRoll(roll))
    }

    useEffect(()=> {
        generateDice();
    }, [])  
    
  return (
    <View>
        <Text>{roll.result}</Text>
        <APIButton onPress={generateDice}>
        <Text>Generate dice</Text>
        </APIButton>      
    </View>
  )
}

export default DiceApi;
