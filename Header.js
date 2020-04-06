import React from 'react'
//import {Text, View, StyleSheet} from 'react-native'
import styled from 'styled-components/native'
import { StyleSheet } from "react-native";

export default function Header () {


  return (
    <View>
      <Text> MAGIC 8 BALL </Text>

    </View>
  )
}

const View = styled.View`
  margin-top: 120;
  height: 100;
  width: 100%;
  background-color: #FCED84;
  justify-content: center;
  align-items: center;
`
const Text = styled.Text`
  font-size: 50;
`