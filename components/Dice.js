import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import styled from 'styled-components/native'
import { SensorComponent } from './SensorComponent'


const APIButton = styled.TouchableOpacity`
font-weight: 700; 
width: 50%;
justify-content: center;
background-color: red;
text-align: center;
`
const Title = styled.Text`
font-size: 50px;
text-align: center;
`

const Container = styled.View`
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
`




const DiceApi = ({navigation}) => {

    const [roll, setRoll] = useState([])

    const generateDice = () => {
      setRoll(Math.floor(Math.random() * 5 + 1));
    };
    

  return (
    <View>
      <Container>
        <Text>{roll}</Text>
        <APIButton onPress={generateDice}>
        <Text>Generate dice</Text>
        </APIButton>
        </Container>      
    </View>
  )
}

export default DiceApi;
