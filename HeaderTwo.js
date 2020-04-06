import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default function HeaderTwo () {


  return (
    <View>
     
     <StyldeText>MAGIC 8 BALL</StyldeText>

    </View>
  )
}

const View = styled.View`
  margin-top: 120;
  height: 100;
  width: 100%;
  justifyContent: center;
  align-items: center;
  background-color: #FCED84;
`
const StyldeText = styled.Text`
  font-size; 50px;
`