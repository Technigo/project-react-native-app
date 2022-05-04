import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { SensorComponent } from './SensorComponent'

import Dice1 from '../assets/dice1.png';
import Dice2 from '../assets/dice2.png';
import Dice3 from '../assets/dice3.png';
import Dice4 from '../assets/dice4.png';
import Dice5 from '../assets/dice5.png';
import Dice6 from '../assets/dice6.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE489',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:300,
    height:300
  },
  texts:{
    fontSize:26,
    color:'#35BDD0',
    marginTop: 50 ,
    paddingHorizontal: 10,
    borderColor: '#30475E',
    borderRadius: 10,
    borderWidth: 3,
    fontWeight: 'bold'
  }
});


const DiceApi = ({navigation}) => {

  const [roll,setRoll] = useState(Dice1);

  const generateDice = ()=>{
    const randomDice = Math.floor(Math.random() * 6) + 1

    switch(randomDice){
      case 1: setRoll(Dice1);
        break;
      case 2: setRoll(Dice2);
        break;
      case 3: setRoll(Dice3);
        break;
      case 4: setRoll(Dice4);
        break;
      case 5: setRoll(Dice5);
        break;
      case 6: setRoll(Dice6);
       break;
      default: setRoll(Dice1);
    }
  }

  return(
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={roll}
      />
      <TouchableOpacity onPress={generateDice}> 
        <Text style={styles.texts}>Let's roll</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DiceApi;
